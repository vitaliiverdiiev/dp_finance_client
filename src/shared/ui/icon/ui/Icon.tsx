import { cn } from '@/shared/utils';
import { ICON_MAP, IconName } from '../model/icon-map';

type Props = Omit<React.HTMLAttributes<SVGElement>, 'color'> & {
  icon: IconName;
  color?: string;
  size?: string | number;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}

export const Icon: React.FC<Props> = ({
  className = '',
  icon,
  color = 'currentColor',
  size = '20px',
  weight = 'bold',
  ...props
}) => {
  const IconComponent = ICON_MAP[icon];

  return (
    <IconComponent
      className={cn(
        'ui-icon',
        'flex-shrink-0 flex-grow-0',
        className
      )}
      color={color}
      size={size}
      weight={weight}
      {...props}
    />
  );
};
