import {
  ReactNode,
  ReactElement,
  createContext,
  useState,
  useContext,
  useCallback,
  useRef,
} from 'react';
import { useClickOutside } from '@cezembre/fronts';
import Index from '../general/button';

export enum Type {
  FULL_DARK = 'full-dark',
}

export interface ModalProps {
  type?: Type;
  title?: string;
  description?: string;
  component?: ReactElement;
  onExit?: () => void;
  onCancel?: () => void;
  cancelLabel?: string;
  onRefuse?: () => void;
  refuseLabel?: string;
  onAccept?: () => void;
  acceptLabel?: string;
  onContinue?: () => void;
  continueLabel?: string;
}

export interface ModalState {
  isActive: boolean;
  popModal: (props: ModalProps | string) => void;
  dismissModal: () => void;
}

const Context = createContext<ModalState>({
  popModal: () => undefined,
  dismissModal: () => undefined,
  isActive: false,
});

export function useModal(): ModalState {
  return useContext<ModalState>(Context);
}

export interface ModalContainerProps extends ModalProps {
  isActive?: boolean;
  setIsActive?: (isActive: boolean) => void;
}

export default function Modal({
  isActive,
  setIsActive,
  type = Type.FULL_DARK,
  title,
  description,
  component,
  onExit,
  onCancel,
  cancelLabel,
  onRefuse,
  refuseLabel,
  onAccept,
  acceptLabel,
  onContinue,
  continueLabel,
}: ModalContainerProps): ReactElement {
  const modal = useRef(null);

  const onClickOutside = useCallback(() => {
    if (isActive && setIsActive) {
      setIsActive(false);
    }
    if (onExit) {
      onExit();
    }
  }, [isActive, onExit, setIsActive]);

  useClickOutside(modal, onClickOutside);

  return (
    <div className={`ui-modal ${type}${isActive ? ' active' : ''}`}>
      <div className="container" ref={modal}>
        {title || description ? (
          <div className="body">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        ) : null}

        {component ? <div className="component">{component}</div> : null}

        {onCancel || onRefuse || onAccept || onContinue ? (
          <div className="actions">
            {onCancel ? (
              <div className="action">
                <Index onClick={onCancel}>{cancelLabel || 'Annuler'}</Index>
              </div>
            ) : null}

            {onRefuse ? (
              <div className="action">
                <Index onClick={onRefuse}>{refuseLabel || 'Refuser'}</Index>
              </div>
            ) : null}

            {onAccept ? (
              <div className="action">
                <Index onClick={onAccept}>{acceptLabel || 'Accepter'}</Index>
              </div>
            ) : null}

            {onContinue ? (
              <div className="action">
                <Index onClick={onContinue}>{continueLabel || 'Continuer'}</Index>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export interface ContextProps {
  children?: ReactNode;
}

export function ModalContext({ children }: ContextProps): ReactElement {
  const [modalProps, setModalProps] = useState<ModalProps>({});
  const [isActive, setIsActive] = useState<boolean>(false);

  const popModal = useCallback((props: ModalProps | string) => {
    if (typeof props === 'string') {
      setModalProps({ title: props });
    } else {
      setModalProps(props);
    }
    setIsActive(true);
  }, []);

  const dismissModal = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <Context.Provider value={{ popModal, dismissModal, isActive }}>
      {children}
      <Modal
        isActive={isActive}
        setIsActive={setIsActive}
        title={modalProps.title}
        description={modalProps.description}
        component={modalProps.component}
        onCancel={modalProps.onCancel}
        cancelLabel={modalProps.cancelLabel}
        onRefuse={modalProps.onRefuse}
        refuseLabel={modalProps.refuseLabel}
        onAccept={modalProps.onAccept}
        acceptLabel={modalProps.acceptLabel}
        onContinue={modalProps.onContinue}
        continueLabel={modalProps.continueLabel}
      />
    </Context.Provider>
  );
}
