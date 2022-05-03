import { ChangeEvent, ReactElement, useEffect, useRef, useState } from 'react';
import { AspectRatio, Orientation, Img } from '@cezembre/fronts';
import { Property } from 'csstype';
import Icon from '../general/icon';
import Loader from '../general/loader';

const reader = new FileReader();

export interface Props {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  aspectRatio?: AspectRatio;
  orientation?: Orientation;
  objectFit?: Property.ObjectFit;
  objectPosition?: Property.ObjectPosition;
  backgroundColor?: Property.BackgroundColor;
  placeholder?: boolean;
  onUpload?: (file: File) => Promise<void>;
  tabIndex?: number;
  label?: string;
  instructions?: string;
}

export default function UploadImage({
  src,
  alt,
  width,
  height,
  aspectRatio,
  orientation,
  objectFit,
  objectPosition,
  backgroundColor,
  placeholder,
  onUpload,
  tabIndex = 0,
  label,
  instructions,
}: Props): ReactElement {
  const input = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string | undefined>(src);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  async function onChange(event: ChangeEvent<HTMLInputElement>) {
    setError(null);

    if (event.target.files && event.target.files[0]) {
      // TODO : Check format && size
      const image = event.target.files[0];

      reader.onload = (progressEvent: ProgressEvent<FileReader>) => {
        if (progressEvent.target && progressEvent.target.result) {
          if (typeof progressEvent.target.result === 'string') {
            setImageSrc(progressEvent.target.result);
          }
        }
      };

      reader.readAsDataURL(image);

      if (onUpload) {
        setPending(true);
        try {
          await onUpload(event.target.files[0]);
        } catch (e) {
          setError(e as Error);
        } finally {
          setPending(false);
        }
      }
    }
  }

  const [classNames, setClassNames] = useState<string[]>(['friday-ui-uploads-image']);

  useEffect(() => {
    const nextClassNames = ['friday-ui-uploads-image'];

    if (pending || error) {
      nextClassNames.push('active');
    }

    if (!imageSrc) {
      nextClassNames.push('empty');
    }

    setClassNames(nextClassNames);
  }, [error, imageSrc, pending]);

  return (
    <div className={classNames.join(' ')} tabIndex={tabIndex}>
      {label ? <p className="label">{label}</p> : null}

      <button
        type="button"
        onClick={() => (input.current ? input.current.click() : null)}
        style={{ width, height }}>
        <input type="file" onChange={onChange} ref={input} />

        <div className="image" style={{ width, height }}>
          <Img
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            aspectRatio={aspectRatio}
            orientation={orientation}
            objectFit={objectFit}
            objectPosition={objectPosition}
            backgroundColor={backgroundColor}
            placeholder={placeholder}
          />
        </div>

        <div className="overlay">
          {error ? <p className="error">{error.message}</p> : null}
          {pending ? <Loader size={40} /> : null}
          {!error && !pending ? <Icon name="image" size={30} /> : null}
        </div>
      </button>

      {instructions ? <p className="instructions">{instructions}</p> : null}
    </div>
  );
}
