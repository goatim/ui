import { cloneElement, createElement, ReactElement, useMemo } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import _ from 'lodash';
import { Icon } from './icon';
import { SelectOption, SelectOptionComponentProps } from './select';

export interface RadioOptionComponentProps<V = unknown> {
  value?: V;
  active?: boolean;
}

export interface RadioOption<V = unknown> {
  value: V;
  label?: string | number | boolean;
  element?: ReactElement<RadioOptionComponentProps<V>> | null;
  component?: (props: RadioOptionComponentProps<V>) => ReactElement | null;
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

interface OptionButtonProps<V> {
  onClick?: () => void;
  option: SelectOption<V>;
  value?: V;
  defaultComponent?: (props: SelectOptionComponentProps<V>) => ReactElement | null;
}

function OptionButton<V>({ onClick, option, value, defaultComponent }: OptionButtonProps<V>) {
  const active = useMemo(() => {
    if (value === undefined) {
      return false;
    }
    return _.isEqual(option.value, value);
  }, [option.value, value]);

  const className = useMemo<string>(() => {
    const classNames = ['option'];

    if (active) {
      classNames.push('active');
    }

    return classNames.join(' ');
  }, [active]);

  return (
    <button type="button" onClick={onClick} className={className}>
      <Option<V> option={option} defaultComponent={defaultComponent} active={active} />
    </button>
  );
}

export type RadioOrientation = 'horizontal' | 'vertical';

export interface RadioProps<V = unknown> extends FieldComponentProps<V> {
  label?: string;
  options?: RadioOption<V>[];
  defaultComponent?: (props: RadioOptionComponentProps<V>) => ReactElement | null;
  canReset?: boolean;
  instructions?: ReactElement | string;
  orientation?: RadioOrientation;
  fullWidth?: boolean;
}

export function Radio<V = unknown>({
  value,
  error,
  warning,
  isActive,
  name,
  onChange,
  label,
  options = [],
  defaultComponent,
  canReset,
  instructions,
  orientation = 'horizontal',
  fullWidth,
}: RadioProps<V>): ReactElement {
  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-radio', orientation];

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
  }, [error, isActive, orientation, warning, fullWidth]);

  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}

      <div className="options">
        {options?.map((option, index) => (
          <div
            key={
              typeof option.value === 'string' || typeof option.value === 'number'
                ? option.value
                : index
            }
            className="option">
            <OptionButton<V>
              key={
                typeof option.value === 'string' || typeof option.value === 'number'
                  ? option.value
                  : index
              }
              onClick={() => onChange(option.value)}
              option={option}
              value={value}
              defaultComponent={defaultComponent}
            />
          </div>
        ))}

        {canReset ? (
          <button type="button" className="reset" onClick={() => onChange(undefined)}>
            <Icon name="x" />
          </button>
        ) : null}
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
