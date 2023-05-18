import {
  cloneElement,
  createElement,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { DateTime } from 'luxon';
import isPromise from 'is-promise';
import { Icon } from './icon';
import { Check } from './check';
import { Button, ButtonProps } from './button';
import { Datetime } from './datetime';

export type TableCellType =
  | 'auto'
  | 'unknown'
  | 'undefined'
  | 'null'
  | 'text'
  | 'number'
  | 'date'
  | 'relative-date'
  | 'datetime'
  | 'relative-datetime'
  | 'time'
  | 'relative-time'
  | 'boolean';

export interface TableItem {
  id: string;
}

export interface TableCellComponentProps<I extends TableItem = TableItem> {
  column: TableColumn<I>;
  item: I;
}

export interface TableColumn<I extends TableItem = TableItem> {
  key: keyof I | string;
  label?: string;
  type?: TableCellType;
  width?: string | number;
  sorted?: 'asc' | 'desc';
  onSort?: () => unknown;
  cellElement?: ReactElement<TableCellComponentProps<I>> | null;
  cellComponent?: (props: TableCellComponentProps<I>) => ReactElement | null;
}

export type TableSelection = string | string[] | undefined;

export interface TableItemAction extends ButtonProps {
  key: string;
  onlySingle?: boolean;
}

export interface TableCellProps<I extends TableItem = TableItem> {
  column: TableColumn<I>;
  item: I;
}

/**
 * TableCell
 * Handled native types :
 * String
 * Number
 * Date
 * DateTime (luxon)
 * Object that contains toString() function
 */

function TableCell<I extends TableItem = TableItem>({
  column,
  item,
}: TableCellProps<I>): ReactElement | null {
  if (column.cellElement) {
    return cloneElement(column.cellElement, { column, item });
  }

  if (column.cellComponent) {
    return createElement(column.cellComponent, { column, item });
  }

  const value = column.key in item ? item[column.key as keyof I] : '-';

  let resolvedType = column.type;

  if (!column.type || column.type === 'auto') {
    if (value === null) {
      resolvedType = 'null';
    }
    switch (typeof value) {
      case 'undefined':
        resolvedType = 'undefined';
        break;

      case 'string':
        resolvedType = 'text';
        break;

      case 'number':
        resolvedType = 'number';
        break;

      case 'object':
        if (DateTime.isDateTime(value) || value instanceof Date) {
          resolvedType = 'date';
        } else {
          resolvedType = 'unknown';
        }
        break;

      case 'boolean':
        resolvedType = 'boolean';
        break;

      default:
        resolvedType = 'unknown';
        break;
    }
  }

  switch (resolvedType) {
    case 'text': {
      let text: string;

      if (typeof value === 'string') {
        text = value;
      } else if (typeof value === 'object') {
        if (
          value &&
          'toString' in value &&
          typeof value.toString === 'function' &&
          value.toString
        ) {
          text = value.toString();
        } else {
          return null;
        }
      } else {
        return null;
      }

      return <span className="text">{text}</span>;
    }

    case 'number':
      return <span className="number">{value as number}</span>;

    case 'date':
    case 'relative-date':
    case 'time':
    case 'relative-time':
    case 'datetime':
    case 'relative-datetime': {
      let datetime: DateTime | string;

      if (DateTime.isDateTime(value)) {
        datetime = value;
      } else if (typeof value === 'string') {
        datetime = DateTime.fromISO(value);
      } else if (value && typeof value === 'object') {
        if (value instanceof Date) {
          datetime = DateTime.fromJSDate(value);
        } else {
          datetime = DateTime.fromObject(value);
        }
      } else {
        return null;
      }

      return (
        <Datetime
          value={datetime}
          date={['date', 'relative-date', 'datetime', 'relative-datetime'].includes(resolvedType)}
          time={['time', 'relative-time', 'datetime', 'relative-datetime'].includes(resolvedType)}
          relative={['relative-date', 'relative-time', 'relative-datetime'].includes(resolvedType)}
        />
      );
    }

    case 'boolean':
      return value ? <Icon name="check" size={15} /> : <Icon name="x" size={15} />;

    default:
      return null;
  }
}

export interface TableProps<I extends TableItem = TableItem> {
  columns: TableColumn<I>[];
  items?: I[];
  EmptyPlaceholder?: ReactElement;
  emptyLabel?: string;
  onSelectItem?: (selection: TableSelection) => unknown;
  selectionMode?: 'single' | 'multiple';
  defaultSelection?: TableSelection;
  itemActions?: TableItemAction[];
}

export function Table<I extends TableItem = TableItem>({
  columns,
  items,
  EmptyPlaceholder,
  emptyLabel,
  onSelectItem,
  selectionMode,
  defaultSelection,
  itemActions,
}: TableProps<I>): ReactElement {
  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-table'];
    if (onSelectItem || selectionMode) {
      classNames.push('clickable');
    }
    if (selectionMode) {
      classNames.push('selectable');
    }
    return classNames.join(' ');
  }, [onSelectItem, selectionMode]);

  const [selection, setSelection] = useState<TableSelection>(defaultSelection);
  const [allSelected, setAllSelected] = useState<boolean>(false);

  const selectItem = useCallback(
    (id: string) => {
      (async () => {
        let nextSelection: TableSelection;
        let callback: unknown | undefined;

        switch (selectionMode) {
          case 'multiple':
            if (!selection) {
              nextSelection = [id];
            } else if (typeof selection === 'string') {
              nextSelection = selection !== id ? [selection, id] : undefined;
            } else {
              const i = selection.findIndex((value) => value === id);
              if (i === -1) {
                nextSelection = [...selection, id];
              } else {
                nextSelection = [...selection];
                nextSelection.splice(i, 1);
              }
            }
            break;

          default:
            nextSelection = selection !== id ? id : undefined;
            break;
        }

        setSelection(nextSelection);

        if (onSelectItem) {
          callback = onSelectItem(nextSelection);
        }

        if (isPromise(callback)) {
          await callback;
        }
      })();
    },
    [onSelectItem, selection, selectionMode],
  );

  useEffect(() => {
    if (!items?.length || !selection?.length) {
      setAllSelected(false);
    } else {
      let diff = false;
      items.forEach(({ id }) => {
        if (!selection.includes(id)) {
          diff = true;
        }
      });
      setAllSelected(!diff);
    }
  }, [items, selection]);

  const selectAll = useCallback(
    (active: boolean) => {
      (async () => {
        const nextSelection =
          active && items && items.length ? items.map(({ id }) => id) : undefined;
        let callback: unknown | undefined;
        setSelection(nextSelection);
        if (onSelectItem) {
          callback = onSelectItem(nextSelection);
        }
        if (isPromise(callback)) {
          await callback;
        }
      })();
    },
    [items, onSelectItem],
  );

  if (!items?.length) {
    return (
      EmptyPlaceholder || (
        <div className="goatim-ui-data-empty-table">
          <Icon name="inbox" size={50} width={1} />
          <span className="label">{emptyLabel || 'Aucune donnée'}</span>
        </div>
      )
    );
  }

  return (
    <div className={className}>
      <div className="header">
        <div className="menu">
          {itemActions && selection?.length ? (
            <div className="item-actions">
              {itemActions
                .filter((action) =>
                  Array.isArray(selection) && selection.length > 1 ? !action.onlySingle : true,
                )
                .map((action: TableItemAction) => (
                  <div key={action.key} className="action">
                    <Button
                      href={action.href}
                      onClick={action.onClick}
                      onFocus={action.onFocus}
                      type={action.type}
                      shape={action.shape}
                      size={action.size}
                      theme={action.theme}
                      disabled={action.disabled}
                      pending={action.pending}
                      active={action.active}
                      success={action.success}
                      errored={action.errored}
                      leftIcon={action.leftIcon}
                      rightIcon={action.rightIcon}>
                      {action.children}
                    </Button>
                  </div>
                ))}
              {Array.isArray(selection) && selection.length > 1 ? (
                <span className="count-selection">{selection.length} selectionnés</span>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            {selectionMode ? (
              <th style={{ width: 40 }}>
                {selectionMode === 'multiple' ? (
                  <Check active={allSelected} onChange={selectAll} />
                ) : null}
              </th>
            ) : null}
            {columns.map((column: TableColumn<I>) => (
              <th key={column.key as string} style={{ width: column.width }}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {items?.map((item: I) => (
            <tr
              key={item.id}
              className={
                selection?.includes(item.id) || selection === item.id ? 'selected' : undefined
              }
              onClick={() => selectItem(item.id)}>
              {selectionMode ? (
                <td width={40}>
                  <div className="selection">
                    <Check active={selection?.includes(item.id) || selection === item.id} />
                  </div>
                </td>
              ) : null}
              {columns.map((column: TableColumn<I>) => (
                <td key={column.key as string} width={column.width}>
                  <TableCell column={column} item={item} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
