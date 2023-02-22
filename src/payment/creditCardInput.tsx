import {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import { CardBrand } from '@fridaygame/client';
import { Icon } from '../general';

export interface CreditCardValue {
  number: string;
  exp_month: string;
  exp_year: string;
  csc: string;
  brand: CardBrand;
  isComplete: boolean;
  isValid: boolean;
}

export interface CreditCardInputProps extends FieldComponentProps<CreditCardValue> {
  label?: string | null;
  instructions?: string | null;
}

export function CreditCardInput({
  visited,
  error,
  submitted,
  warning,
  isActive,
  name,
  onFocus,
  onBlur,
  onChange,
  label = null,
  instructions = null,
}: CreditCardInputProps): ReactElement {
  const className = useMemo<string>(() => {
    const classNames = ['friday-ui-credit-card-input'];
    if (visited) {
      classNames.push('visited');
    }
    if (isActive) {
      classNames.push('active');
    }
    if ((visited || submitted) && !isActive && error) {
      classNames.push('error');
    }
    if (warning) {
      classNames.push('warning');
    }
    return classNames.join(' ');
  }, [error, isActive, submitted, visited, warning]);

  const numberRef = useRef<HTMLInputElement>(null);
  const expRef = useRef<HTMLInputElement>(null);
  const cscRef = useRef<HTMLInputElement>(null);

  const [numberValue, setNumberValue] = useState<string>('');
  const [expValue, setExpValue] = useState<string>('');
  const [cscValue, setCscValue] = useState<string>('');

  const [numberFocus, setNumberFocus] = useState<boolean>(false);
  const [expFocus, setExpFocus] = useState<boolean>(false);
  const [cscFocus, setCscFocus] = useState<boolean>(false);

  const [numberComplete, setNumberComplete] = useState<boolean>(false);
  const [expComplete, setExpComplete] = useState<boolean>(false);
  const [cscComplete, setCscComplete] = useState<boolean>(false);

  const numberChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const digits = value.replace(/[^0-9]+/g, '');
      const formattedDigits = digits
        .replace(/([0-9]{4})/g, '$1 ')
        .replace(/([0-9\s]{19})(.+)$/g, '$1');
      setNumberValue(formattedDigits);
      if (formattedDigits.length >= 19) {
        setNumberComplete(true);
        expRef.current?.focus();
      } else {
        setNumberComplete(false);
      }
    },
    [],
  );

  const expKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Backspace') {
        const digitToRemove = expValue.length === 6 ? 4 : 1;
        setExpValue((n) => (n.length ? n.slice(0, -digitToRemove) : ''));
      } else if (event.key.match(/[0-9]/)) {
        if (expValue.length < 7) {
          if (!expValue.length) {
            if (event.key.match(/[2-9]/)) {
              setExpValue((n) => `${n}0${event.key} / `);
            } else {
              setExpValue(event.key);
            }
          } else if (expValue.length === 1) {
            if (event.key.match(/[0-2]/)) {
              setExpValue((n) => `${n + event.key} / `);
            }
          } else if (expValue.length === 2) {
            setExpValue((n) => `${n} / ${event.key}`);
          } else {
            setExpValue((n) => n + event.key);
          }
        } else {
          cscRef.current?.focus();
        }
      }
    },
    [expValue.length],
  );

  // const expChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
  //   (event: ChangeEvent<HTMLInputElement>) => {},
  //   [expValue.length],
  // );

  const cscChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (value.length <= 3) {
        setCscValue(value);
      }
    },
    [],
  );

  useEffect(() => {
    if (numberFocus || expFocus || cscFocus) {
      onFocus();
    } else {
      onBlur();
    }
  }, [cscFocus, expFocus, numberFocus, onBlur, onFocus]);

  useEffect(() => {
    if (expValue.length === 7) {
      setExpComplete(true);
    } else {
      setExpComplete(false);
    }
  }, [expValue.length]);

  useEffect(() => {
    if (cscValue.length === 3) {
      setCscComplete(true);
    } else {
      setCscComplete(false);
    }
  }, [cscValue.length]);

  useEffect(() => {
    // TODO : Check validity
    if (numberComplete && expComplete && cscComplete) {
      onChange({
        brand: 'unknown',
        number: numberValue.replace(/\s+/g, ''),
        exp_month: expValue.substring(0, 2),
        exp_year: `20${expValue.substring(5)}`,
        csc: cscValue,
        isComplete: numberComplete && expComplete && cscComplete,
        isValid: true,
      });
    }
  }, [cscComplete, cscValue, expComplete, expValue, numberComplete, numberValue, onChange]);

  return (
    <div className={className}>
      {label ? <label htmlFor={name}>{label}</label> : null}

      <div className={`container${isActive ? ' active' : ''}`}>
        <div className="icon">
          <Icon name="credit-card" />
        </div>
        <input
          ref={numberRef}
          value={numberValue}
          // onKeyDown={numberKeyDown}
          onChange={numberChange}
          onFocus={() => setNumberFocus(true)}
          onBlur={() => setNumberFocus(false)}
          name="cardnumber"
          className="number"
          type="text"
          autoComplete="cc-number"
          placeholder="Numéro de carte"
          autoCorrect="false"
          spellCheck="false"
          inputMode="numeric"
        />
        <input
          ref={expRef}
          value={expValue}
          onKeyDown={expKeyDown}
          onFocus={() => setExpFocus(true)}
          onBlur={() => setExpFocus(false)}
          name="cardexp"
          className="exp"
          type="text"
          autoComplete="cc-exp"
          placeholder="MM / AA"
          autoCorrect="false"
          spellCheck="false"
          inputMode="numeric"
        />
        <input
          ref={cscRef}
          value={cscValue}
          onChange={cscChange}
          onFocus={() => setCscFocus(true)}
          onBlur={() => setCscFocus(false)}
          name="cardcsc"
          className="csc"
          type="number"
          placeholder="CVC"
          autoComplete="cc-csc"
          autoCorrect="false"
          spellCheck="false"
          inputMode="numeric"
        />
      </div>

      {instructions ? <p className="instructions">{instructions}</p> : null}

      {(visited || submitted) && !isActive && error ? (
        <div className="error">
          <Icon name="alert-triangle" size={15} />
          <span>{error}</span>
        </div>
      ) : null}

      {warning ? (
        <div className="warning">
          <Icon name="alert-triangle" size={15} />
          <span>{warning}</span>
        </div>
      ) : null}
    </div>
  );
}
