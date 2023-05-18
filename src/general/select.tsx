import {
  ChangeEventHandler,
  JSXElementConstructor,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import { useClickOutside } from '@cezembre/fronts';
import _ from 'lodash';
import { Icon } from './icon';

export interface SelectOption<V = string> {
  value: V;
  element?: ReactElement | string | number;
}

export interface SelectOptionProps<V = string> {
  option?: SelectOption<V>;
  DefaultComponent?: JSXElementConstructor<{ value: V }>;
  placeholder?: string;
}

function SelectOptionComponent<V = string>({
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

export type SelectShape = 'square' | 'round' | 'borderless';

export type SelectType = 'dropdown' | 'flat';

export interface SelectProps<V = string> extends FieldComponentProps<V | undefined> {
  label?: string;
  options?: SelectOption<V>[];
  DefaultComponent?: JSXElementConstructor<{ value: V }>;
  canReset?: boolean;
  shape?: SelectShape;
  type?: SelectType;
  instructions?: ReactElement | string;
  fullWidth?: boolean;
  placeholder?: string;
  onSearch?: (search?: string) => unknown;
}

export function Select<V = string>({
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
  canReset,
  instructions,
  shape = 'square',
  type = 'dropdown',
  fullWidth,
  placeholder,
  onSearch,
}: SelectProps<V>): ReactElement {
  const className = useMemo<string>(() => {
    const classNames: string[] = ['goatim-ui-select', shape, type];

    if (isActive) {
      classNames.push('active');
    }

    if (error) {
      classNames.push('error');
    }

    if (warning) {
      classNames.push('warning');
    }

    if (fullWidth) {
      classNames.push('full-width');
    }

    return classNames.join(' ');
  }, [error, fullWidth, isActive, shape, type, warning]);

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

  const selectButtonRef = useRef<HTMLButtonElement>(null);

  const optionsRef = useRef<HTMLDivElement>(null);

  const clickOutside = useCallback(() => {
    if (isActive) {
      onBlur();
    }
  }, [isActive, onBlur]);

  useClickOutside([selectButtonRef, optionsRef], clickOutside);

  const selectedOption = useMemo<SelectOption<V> | undefined>(() => {
    if (value) {
      return options?.find((option) => _.isEqual(option.value, value)) || { value };
    }
    return undefined;
  }, [options, value]);

  const [searchActive, setSearchActive] = useState<boolean>(false);

  const [search, setSearch] = useState<string>('');

  const onSearchDebounced = useMemo<(search?: string) => unknown>(() => {
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

  const reset = useCallback(() => {
    setTimeout(() => {
      onChange(undefined);
    }, 5);
  }, [onChange]);

  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}

      <div className="body">
        {selectedOption || type === 'dropdown' ? (
          <div className="selector">
            <button ref={selectButtonRef} onClick={toggleFocus} type="button" className="main">
              <SelectOptionComponent<V>
                option={selectedOption}
                placeholder={placeholder}
                DefaultComponent={DefaultComponent}
              />
              {type === 'dropdown' ? <Icon name="chevron-down" /> : null}
            </button>
            {selectedOption && canReset ? (
              <button type="button" className="reset" onClick={reset}>
                <Icon name="x" />
              </button>
            ) : null}
          </div>
        ) : null}

        <div className="options" ref={optionsRef}>
          {onSearch ? (
            <div className="search">
              <div className={`body${searchActive ? ' active' : ''}`}>
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
