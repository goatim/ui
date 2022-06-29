import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { DateTime } from 'luxon';
import { Model } from '@fridaygame/client';
import Icon from './icon';
import Check from './check';
import Button, { Props as ButtonProps } from './button';
import Datetime from './datetime';

export type TableCellType =
  | 'auto'
  | 'unknown'
  | 'text'
  | 'number'
  | 'date'
  | 'relative-date'
  | 'datetime'
  | 'relative-datetime'
  | 'time'
  | 'relative-time'
  | 'boolean';

export interface TableCellProps {
  value: unknown;
  type?: TableCellType;
}

/**
 * Cell
 * Handled types :
 * String
 * Number
 * Date
 * DateTime (luxon)
 * Object that contains toString() function
 */

function Cell({ value, type = 'auto' }: TableCellProps): ReactElement | null {
  let resolvedType: TableCellType = type;

  if (value === null || value === undefined) {
    return null;
  }

  if (type === 'auto') {
    switch (typeof value) {
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

  let text: string;
  let datetime: DateTime;

  switch (resolvedType) {
    case 'text':
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

    case 'number':
      return <span className="number">{value as number}</span>;

    case 'date':
    case 'relative-date':
    case 'time':
    case 'relative-time':
    case 'datetime':
    case 'relative-datetime':
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
        <span className="date">
          <Datetime
            value={datetime}
            date={['date', 'relative-date', 'datetime', 'relative-datetime'].includes(resolvedType)}
            time={['time', 'relative-time', 'datetime', 'relative-datetime'].includes(resolvedType)}
            relative={['relative-date', 'relative-time', 'relative-datetime'].includes(
              resolvedType,
            )}
          />
        </span>
      );

    case 'boolean':
      return (
        <span className="boolean">
          {value ? <Icon name="check" size={15} /> : <Icon name="x" size={15} />}
        </span>
      );

    default:
      return null;
  }
}

export interface TableColumn<M extends Model = Model> {
  key: string;
  label?: string;
  type?: TableCellType;
  width?: string | number;
  sorted?: 'asc' | 'desc';
  onSort?: () => Promise<void> | void;
  Cell?: (props: { item: M }) => ReactElement;
}

export type TableSelection = string | string[] | undefined;

export interface TableItemAction extends ButtonProps {
  key: string;
  onlySingle?: boolean;
}

export interface Props<M extends Model = Model> {
  columns: TableColumn<M>[];
  data?: M[];
  EmptyPlaceholder?: ReactElement;
  emptyLabel?: string;
  onSelectItem?: (selection: TableSelection) => Promise<void> | void;
  selectionMode?: 'single' | 'multiple';
  defaultSelection?: TableSelection;
  itemActions?: TableItemAction[];
}

export default function Table<M extends Model = Model>({
  columns,
  data = [],
  EmptyPlaceholder,
  emptyLabel,
  onSelectItem,
  selectionMode,
  defaultSelection,
  itemActions,
}: Props<M>): ReactElement {
  const className = useMemo<string>(() => {
    let res = 'friday-ui-table';
    if (onSelectItem || selectionMode) {
      res += ' clickable';
    }
    if (selectionMode) {
      res += ' selectable';
    }
    return res;
  }, [onSelectItem, selectionMode]);

  const [selection, setSelection] = useState<TableSelection>(defaultSelection);
  const [allSelected, setAllSelected] = useState<boolean>(false);

  const selectItem = useCallback(
    (id: string) => {
      (async () => {
        let nextSelection: TableSelection;
        let callback: Promise<void> | void | undefined;

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

        if (
          callback &&
          typeof callback === 'object' &&
          'then' in callback &&
          callback.then &&
          typeof callback.then === 'function'
        ) {
          await callback;
        }
      })();
    },
    [onSelectItem, selection, selectionMode],
  );

  useEffect(() => {
    if (!data || !data.length || !selection || !selection.length) {
      setAllSelected(false);
    } else {
      let diff = false;
      data.forEach(({ id }) => {
        if (!selection.includes(id)) {
          diff = true;
        }
      });
      setAllSelected(!diff);
    }
  }, [data, selection]);

  const selectAll = useCallback(
    (active: boolean) => {
      (async () => {
        const nextSelection = active && data && data.length ? data.map(({ id }) => id) : undefined;
        let callback: Promise<void> | void | undefined;
        setSelection(nextSelection);
        if (onSelectItem) {
          callback = onSelectItem(nextSelection);
        }
        if (
          callback &&
          typeof callback === 'object' &&
          'then' in callback &&
          callback.then &&
          typeof callback.then === 'function'
        ) {
          await callback;
        }
      })();
    },
    [data, onSelectItem],
  );

  if (!data || !data.length) {
    return (
      EmptyPlaceholder || (
        <div className="cezembre-ui-data-empty-table">
          <Icon name="inbox" size={50} width={1} />
          <span className="label">{emptyLabel || 'Aucune donnée'}</span>
        </div>
      )
    );
  }

  return (
    <div className={className}>
      <div className="header">
        {/* <div className="search"></div> */}

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
                      to={action.to}
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
            {columns.map((column: TableColumn<M>) => (
              <th key={column.key as string} style={{ width: column.width }}>
                {column.label}
              </th>
            ))}
            {/* {actions?.length ? <th style={{ width: 40 }} /> : null} */}
          </tr>
        </thead>

        <tbody>
          {data?.map((item: M) => (
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
              {columns.map((column: TableColumn<M>) => (
                <td key={column.key as string} width={column.width}>
                  {column.Cell ? (
                    <column.Cell item={item} />
                  ) : (
                    <Cell value={item[column.key]} type={column.type} />
                  )}
                </td>
              ))}
              {/* {actions?.length ? ( */}
              {/*  <td width={40}> */}
              {/*    <div className="actions"> */}
              {/*      <Icon name="more-vertical" /> */}
              {/*    </div> */}
              {/*  </td> */}
              {/* ) : null} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
