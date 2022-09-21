import {
  ReactElement,
  useMemo,
  useCallback,
  useRef,
  JSXElementConstructor,
  useState,
  ChangeEventHandler,
} from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import { useClickOutside } from '@cezembre/fronts';
import _ from 'lodash';
import Icon from './icon';

export interface SelectOption<V = unknown> {
  value: V;
  element?: ReactElement | string | number;
}

export interface SelectOptionProps<V = unknown> {
  option?: SelectOption<V>;
  DefaultComponent?: JSXElementConstructor<{ value: V }>;
  placeholder?: string;
}

function SelectOptionComponent<V>({
  option,
  DefaultComponent,
  placeholder,
}: SelectOptionProps<V>): ReactElement | null {
  if (option?.element && option?.value) {
    if (typeof option.element === 'string' || typeof option.element === 'number') {
      return <span>{option.element}</span>;
    }
    return option.element;
  }

  if (DefaultComponent && option?.value) {
    return <DefaultComponent value={option.value} />;
  }

  if (option?.value && typeof option.value === 'string' && option.value.length) {
    return <span>{option.value}</span>;
  }

  return <span className="placeholder">{placeholder || 'Selectioner une option'}</span>;
}

export type SelectType = 'dark' | 'flat';

export interface Props<V = unknown> extends FieldComponentProps<V | undefined> {
  label?: string;
  options?: SelectOption<V>[];
  DefaultComponent?: JSXElementConstructor<{ value: V }>;
  canCancel?: boolean;
  type?: SelectType;
  instructions?: ReactElement | string;
  fullWidth?: boolean;
  onSearch?(search?: string): Promise<void> | void;
}

export default function Select<V = unknown>({
  value,
  error,
  warning,
  isActive,
  onFocus,
  onBlur,
  name,
  onChange,
  label,
  options = [],
  DefaultComponent,
  canCancel,
  instructions,
  type = 'dark',
  fullWidth,
  onSearch,
}: Props<V>): ReactElement {
  const className = useMemo<string>(() => {
    let res = `friday-ui-select ${type}`;

    if (isActive) {
      res += ' active';
    }

    if (error) {
      res += ' error';
    }

    if (warning) {
      res += ' warning';
    }

    if (fullWidth) {
      res += ' full-width';
    }
    return res;
  }, [error, fullWidth, isActive, type, warning]);

  const toggleFocus = useCallback(() => {
    if (!isActive) {
      onFocus();
    } else {
      onBlur();
    }
  }, [isActive, onBlur, onFocus]);

  const selectOption = useCallback(
    (_value: V) => {
      onChange(_value);
      onBlur();
    },
    [onBlur, onChange],
  );

  const optionsRef = useRef<HTMLDivElement>(null);

  const clickOutside = useCallback(() => {
    if (isActive) {
      onBlur();
    }
  }, [isActive, onBlur]);

  useClickOutside(optionsRef, clickOutside);

  const selectedOption = useMemo<SelectOption<V> | undefined>(() => {
    if (value) {
      return options?.find((option) => _.isEqual(option.value, value)) || { value };
    }
    return undefined;
  }, [options, value]);

  const [searchActive, setSearchActive] = useState<boolean>(false);

  const [search, setSearch] = useState<string>('');

  const onSearchDebounced = useMemo<(search?: string) => Promise<void> | void>(() => {
    if (onSearch) {
      return _.debounce(onSearch, 500);
    }
    return () => undefined;
  }, [onSearch]);

  const onChangeSearch = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setSearch(event.target.value);
      onSearchDebounced(event.target.value);
    },
    [onSearchDebounced],
  );

  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}

      <div className="container">
        {selectedOption || type === 'dark' ? (
          <div className="selector">
            <button onClick={toggleFocus} type="button" className="main">
              <SelectOptionComponent<V>
                option={selectedOption}
                DefaultComponent={DefaultComponent}
              />
              {type === 'dark' ? <Icon name="chevron-down" /> : null}
            </button>
            {selectedOption && canCancel ? (
              <button type="button" className="cancel" onClick={() => onChange(undefined)}>
                <Icon name="x" />
              </button>
            ) : null}
          </div>
        ) : null}

        <div className="options" ref={optionsRef}>
          {onSearch ? (
            <div className="search">
              <div className={`container${searchActive ? ' active' : ''}`}>
                <input
                  type="text"
                  value={search}
                  onChange={onChangeSearch}
                  onFocus={() => setSearchActive(true)}
                  onBlur={() => setSearchActive(false)}
                />
                <Icon name="search" />
              </div>
            </div>
          ) : null}
          {options?.map((option, index) => (
            <button
              type="button"
              key={
                typeof option.value === 'string' || typeof option.value === 'number'
                  ? option.value
                  : index
              }
              onClick={() => selectOption(option.value)}
              className={`option${_.isEqual(option.value, value) ? ' active' : ''}`}>
              <SelectOptionComponent<V> option={option} DefaultComponent={DefaultComponent} />
            </button>
          ))}
        </div>
      </div>

      {instructions ? <p className="instructions">{instructions}</p> : null}

      {error ? (
        <div className="error">
          <Icon name="alert-triangle" />
          <span>{error}</span>
        </div>
      ) : null}

      {warning ? (
        <div className="warning">
          <Icon name="alert-triangle" />
          <span>{warning}</span>
        </div>
      ) : null}
    </div>
  );
}
