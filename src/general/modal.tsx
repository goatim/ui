import {
  cloneElement,
  createContext,
  createElement,
  FunctionComponent,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useClickOutside } from '@cezembre/fronts';
import { Icon } from './icon';

export interface ModalComponentProps {
  id: string;
  dismissModal: () => unknown;
}

export type ModalType = 'pop-up' | 'overlay' | 'banner' | 'message' | 'screen';

export interface Modal<P extends ModalComponentProps = any> {
  id: string;
  type?: ModalType;
  component?: FunctionComponent<P>;
  props?: P;
  element?: ReactElement<P>;
  onDismiss?: () => unknown;
  isActive?: boolean;
  disableDismiss?: boolean;
}

export interface PushModalParams<P extends ModalComponentProps = any> {
  component?: FunctionComponent<P>;
  props?: P;
  element?: ReactElement<P>;
  type?: ModalType;
  onDismiss?: () => unknown;
  disableDismiss?: boolean;
}

export type PushModalFunction<P extends ModalComponentProps = any> = (
  params: PushModalParams<P>,
) => string | undefined;

export interface ModalsState {
  modals: Modal[];
  pushModal: PushModalFunction;
  dismissModal: (id: string) => unknown;
}

const Context = createContext<ModalsState | undefined>(undefined);

export function useModals(): ModalsState {
  const modals = useContext<ModalsState | undefined>(Context);
  if (!modals) {
    throw new Error('useModals() should be used inside <ModalContext> component');
  }
  return modals;
}

export interface ModalContainerProps<P extends ModalComponentProps = any>
  extends ModalComponentProps {
  modal: Modal<P>;
}

function ModalContainer<P extends ModalComponentProps = any>({
  id,
  modal,
  dismissModal,
}: ModalContainerProps<P>): ReactElement {
  const modalElement = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback(() => {
    if (modal.isActive && !modal.disableDismiss) {
      dismissModal();
    }
  }, [dismissModal, modal.disableDismiss, modal.isActive]);

  useClickOutside(modalElement, onClickOutside);

  // Hack here: We need to delay the removal of the modal so the outside click doesn't get triggered.
  // 5ms seems to be a reasonable threshold.
  const delayedDismissModal = useCallback(() => {
    if (dismissModal) {
      setTimeout(dismissModal, 5);
    }
  }, [dismissModal]);

  const element = useMemo<ReactElement<P> | null>(() => {
    if (modal.element) {
      return cloneElement<P>(modal.element, {
        ...modal.props,
        id: modal.id,
        dismissModal: delayedDismissModal,
      } as P);
    }
    if (modal.component) {
      return createElement<P>(modal.component, {
        ...modal.props,
        id: modal.id,
        dismissModal: delayedDismissModal,
      } as P);
    }
    return null;
  }, [delayedDismissModal, modal]);

  return (
    <div className={`goatim-ui-modal ${modal.type || 'pop-up'}`} id={id}>
      <div className="container">
        <div className="element" ref={modalElement}>
          {element}
          {!modal.disableDismiss ? (
            <button className="dismiss" type="button" onClick={delayedDismissModal}>
              <Icon name="x" size={20} />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export interface ModalsContextProps {
  children?: ReactNode;
}

export function ModalsContext({ children }: ModalsContextProps): ReactElement {
  const [modals, setModals] = useState<Modal[]>([]);

  const pushModal = useCallback(
    (params: PushModalParams) => {
      const modal: Modal = {
        ...params,
        id: Math.random().toString(36).substring(5),
        isActive: true,
      };

      setTimeout(() => {
        setModals((_modals: Modal[]) => [
          ..._modals.map((_modal) => ({ ..._modal, isActive: false })),
          modal,
        ]);
      }, 10);

      return modal.id;
    },
    [setModals],
  );

  const dismissModal = useCallback((id: string) => {
    setModals((_modals) => {
      const nextModals = [..._modals];
      const index = nextModals.findIndex((modal) => modal.id === id);
      if (index !== -1) {
        const { onDismiss } = _modals[index];
        if (onDismiss) {
          onDismiss();
        }
        nextModals.splice(index, 1);
        if (nextModals.length) {
          nextModals[nextModals.length - 1].isActive = true;
        }
      }
      return nextModals;
    });
  }, []);

  const value = useMemo<ModalsState>(
    () => ({
      modals,
      pushModal: pushModal as PushModalFunction<ModalComponentProps>,
      dismissModal,
    }),
    [modals, pushModal, dismissModal],
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const { height, overflow } = document.body.style;
      if (modals.length) {
        document.body.style.height = '100vh';
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.height = height;
        document.body.style.overflowY = overflow;
      }

      return () => {
        document.body.style.height = height;
        document.body.style.overflowY = overflow;
      };
    }
    return () => {};
  }, [modals.length]);

  return (
    <Context.Provider value={value}>
      {children}
      {modals.map((modal: Modal) => (
        <ModalContainer
          key={modal.id}
          id={modal.id}
          modal={modal}
          dismissModal={() => dismissModal(modal.id)}
        />
      ))}
    </Context.Provider>
  );
}
