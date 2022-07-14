import { ChangeEvent, ReactElement, ReactNode, useMemo, useRef, useState } from 'react';
import { IconName } from './icon';
import Button, { ButtonShape, ButtonSize, ButtonTheme } from './button';

export interface Props {
  multiple?: boolean;
  onUpload?: (files: FileList) => Promise<void>;
  onLoad?: (file: string) => void;
  tabIndex?: number;
  children?: ReactNode;
  size?: ButtonSize;
  shape?: ButtonShape;
  theme?: ButtonTheme;
  leftIcon?: IconName;
  rightIcon?: IconName;
  fullWidth?: boolean;
  instructions?: string;
}

export default function Upload({
  children,
  multiple,
  onUpload,
  onLoad,
  tabIndex = 0,
  size = 'medium',
  shape = 'filled',
  theme,
  leftIcon = 'upload',
  rightIcon,
  fullWidth,
  instructions,
}: Props): ReactElement {
  const input = useRef<HTMLInputElement>(null);
  const [localSources, setLocalSources] = useState<string[]>([]);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  async function onChange(event: ChangeEvent<HTMLInputElement>) {
    setError(null);

    if (event.target.files?.length) {
      const reader = new FileReader();

      setLocalSources([]);

      reader.onload = (progressEvent: ProgressEvent<FileReader>) => {
        if (progressEvent.target) {
          const { result } = progressEvent.target;
          if (result && typeof result === 'string') {
            setLocalSources((_src) => [..._src, result]);
            if (onLoad) {
              onLoad(result);
            }
          }
        }
      };

      for (let i = 0; i < event.target.files.length; i += 1) {
        reader.readAsDataURL(event.target.files[i]);
      }

      if (onUpload) {
        setPending(true);
        try {
          await onUpload(event.target.files);
        } catch (e) {
          setError(e as Error);
        } finally {
          setPending(false);
        }
      }
    }
  }

  const className = useMemo<string>(() => {
    let res = 'friday-ui-upload';

    if (error) {
      res += ' error';
    }

    if (pending) {
      res += ' pending';
    }

    return res;
  }, [error, pending]);

  return (
    <div className={className}>
      <input type="file" onChange={onChange} ref={input} tabIndex={tabIndex} multiple={multiple} />

      <Button
        onClick={() => input.current?.click()}
        type="button"
        pending={pending}
        size={size}
        shape={shape}
        theme={theme}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        fullWidth={fullWidth}>
        {children || 'Upload file'}
      </Button>

      {instructions ? <p className="instructions">{instructions}</p> : null}

      {error ? <p className="error">{error.message}</p> : null}
    </div>
  );
}
