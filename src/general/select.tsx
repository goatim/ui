import {
  ChangeEventHandler,
  cloneElement,
  createElement,
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
import { Check } from './check';

export interface SelectOptionComponentProps<V = unknown> {
  value?: V;
  active?: boolean;
}

export interface SelectOption<V = unknown> {
  value: V;
  label?: string | number | boolean;
  element?: ReactElement<SelectOptionComponentProps<V>> | null;
  component?: (props: SelectOptionComponentProps<V>) => ReactElement | null;
}

interface OptionProps<V> {
  option: SelectOption<V>;
  defaultComponent?: (props: SelectOptionComponentProps<V>) => ReactElement | null;
  active?: boolean;
}

function Option<V>({ option, defaultComponent, active }: OptionProps<V>): ReactElement {
  if (option.element) {
    return cloneElement<SelectOptionComponentProps<V>>(option.element, {
      value: option.value,
      active,
    });
  }

  if (option.component) {
    return createElement<SelectOptionComponentProps<V>>(option.component, {
      value: option.value,
      active,
    });
  }

  if (option.label) {
    return <span className="value label">{option.label}</span>;
  }

  if (defaultComponent) {
    return createElement(defaultComponent, { value: option.value, active });
  }

  if (typeof option.value === 'string' || typeof option.value === 'number') {
    return <span className="value">{option.value}</span>;
  }

  if (typeof option.value === 'boolean') {
    return <span className="value boolean">{option.value ? 'true' : 'false'}</span>;
  }

  return <span>-</span>;
}

interface OptionButtonProps<V, FV extends V | V[] = V> {
  onClick?: () => void;
  option: SelectOption<V>;
  value?: FV;
  defaultComponent?: (props: SelectOptionComponentProps<V>) => ReactElement | null;
  multiple?: boolean;
}

function OptionButton<V, FV extends V | V[] = V>({
  onClick,
  option,
  value,
  defaultComponent,
  multiple,
}: OptionButtonProps<V, FV>) {
  const active = useMemo(() => {
    if (value === undefined) {
      return false;
    }
    if (multiple) {
      if (Array.isArray(value)) {
        return value.findIndex((v) => _.isEqual(option.value, v)) !== -1;
      }
      return false;
    }
    return _.isEqual(option.value, value);
  }, [multiple, option.value, value]);

  const className = useMemo<string>(() => {
    const classNames = ['option'];

    if (active) {
      classNames.push('active');
    }

    if (multiple) {
      classNames.push('multiple');
    }

    return classNames.join(' ');
  }, [active, multiple]);

  return (
    <button type="button" onClick={onClick} className={className}>
      {multiple ? (
        <div className="check">
          <Check active={active} />
        </div>
      ) : null}
      <Option<V> option={option} defaultComponent={defaultComponent} active={active} />
    </button>
  );
}

export type SelectShape = 'square' | 'round' | 'borderless';

export type SelectType = 'dropdown' | 'flat';

export type SelectTheme = 'default' | 'electric-blue';

export interface SelectProps<V = unknown, FV extends V | V[] = V> extends FieldComponentProps<FV> {
  label?: string;
  options?: SelectOption<V>[];
  defaultComponent?: (props: SelectOptionComponentProps<V>) => ReactElement | null;
  canReset?: boolean;
  shape?: SelectShape;
  type?: SelectType;
  theme?: SelectTheme;
  instructions?: ReactElement | string;
  fullWidth?: boolean;
  placeholder?: string;
  onSearch?: (search?: string) => unknown;
  multiple?: boolean;
  optionsPlural?: string;
}

export function Select<V = unknown, FV extends V | V[] = V>({
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
  defaultComponent,
  canReset,
  instructions,
  shape = 'square',
  type = 'dropdown',
  fullWidth,
  placeholder = 'Sélectionner',
  onSearch,
  multiple,
  optionsPlural = 'options',
  theme = 'default',
}: SelectProps<V, FV>): ReactElement {
  const className = useMemo<string>(() => {
    const classNames: string[] = ['goatim-ui-select', shape, type, theme];

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

    if (value !== undefined) {
      classNames.push('has-value');
    }

    return classNames.join(' ');
  }, [shape, type, theme, isActive, error, warning, fullWidth, value]);

  const toggleFocus = useCallback(() => {
    if (!isActive) {
      onFocus();
    } else {
      onBlur();
    }
  }, [isActive, onBlur, onFocus]);

  const selectOption = useCallback(
    (_value: V) => {
      if (!multiple) {
        onChange(_value as FV);
        onBlur();
      } else {
        onChange((oldValue) => {
          if (!oldValue) {
            return [_value] as FV;
          }
          if (!Array.isArray(oldValue)) {
            return [oldValue, _value] as FV;
          }
          const index = oldValue.findIndex((v) => _.isEqual(v, _value));

          if (index !== -1) {
            if (oldValue.length <= 1) {
              return undefined;
            }

            const nextValue = [...oldValue];
            nextValue.splice(index, 1);
            return nextValue as FV;
          }
          return [...oldValue, _value] as FV;
        });
      }
    },
    [multiple, onBlur, onChange],
  );

  const selectorButtonRef = useRef<HTMLButtonElement>(null);

  const optionsRef = useRef<HTMLDivElement>(null);

  const clickOutside = useCallback(() => {
    if (isActive) {
      onBlur();
    }
  }, [isActive, onBlur]);

  useClickOutside([selectorButtonRef, optionsRef], clickOutside);

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

  const selectedOption = useMemo<SelectOption<V> | undefined>(() => {
    if (value === undefined) {
      return undefined;
    }

    if (multiple && Array.isArray(value)) {
      if (!value.length) {
        return undefined;
      }
      return options.find((option) => _.isEqual(option.value, value[0]));
    }
    return options.find((option) => _.isEqual(option.value, value));
  }, [multiple, options, value]);

  const nbSelectedOptions = useMemo<number>(() => {
    if (!multiple) {
      return value !== undefined ? 1 : 0;
    }
    if (Array.isArray(value)) {
      return value.length;
    }
    return 0;
  }, [multiple, value]);

  const valueElement = useMemo(() => {
    if (value === undefined) {
      return <span className="placeholder">{placeholder}</span>;
    }

    if (nbSelectedOptions > 1) {
      return (
        <span className="multiple-values">
          {nbSelectedOptions} {optionsPlural}
        </span>
      );
    }

    if (selectedOption) {
      return <Option<V> option={selectedOption} defaultComponent={defaultComponent} active />;
    }

    return null;
  }, [defaultComponent, nbSelectedOptions, optionsPlural, placeholder, selectedOption, value]);

  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}

      <div className="body">
        {value || type === 'dropdown' ? (
          <div className="selector">
            <div className="container">
              <button
                ref={selectorButtonRef}
                onClick={toggleFocus}
                type="button"
                className="value-button">
                {valueElement}
                {type === 'dropdown' && (!canReset || value === undefined) ? (
                  <div className="dropdown-icon">
                    <Icon name="chevron-down" />
                  </div>
                ) : null}
              </button>
              {value !== undefined && canReset ? (
                <button type="button" className="reset" onClick={reset}>
                  <Icon name="x" />
                </button>
              ) : null}
            </div>
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
            <OptionButton<V, FV>
              key={
                typeof option.value === 'string' || typeof option.value === 'number'
                  ? option.value
                  : index
              }
              onClick={() => selectOption(option.value)}
              option={option}
              value={value}
              defaultComponent={defaultComponent}
              multiple={multiple}
            />
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
