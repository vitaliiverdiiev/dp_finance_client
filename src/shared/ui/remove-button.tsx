import { Button, Icon } from '@/shared/ui';

type Props = {
  removeHandler: () => void;
}

export const RemoveButton: React.FC<Props> = ({ removeHandler }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="hover:text-red-500 transition-colors"
      onClick={removeHandler}
    >
      <Icon icon="remove" />
    </Button>
  );
};
