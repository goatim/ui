import { Button } from './button';

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps): JSX.Element {
  return (
    <Button onClick={onClick} leftIcon="back" shape="text" theme="transparent-dark">
      Retour
    </Button>
  );
}
