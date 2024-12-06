import { cn } from '@/shared/utils';
import styles from '../styles/index.module.scss';
import { Link } from 'react-router';

type Props = {
  title?: string;
  description?: string;
}

export const UnderMaintenance: React.FC<Props> = ({
  title = 'Under maintenance',
  description = 'Update is in progress. Please check the page later.'
}) => {
  return (
    <div className={styles.maintenace}>
      <div className="container">
        <div className={styles.box}>
          <h1>{title}</h1>
          <div className={styles.animation}>
            <div className={cn(styles.one, styles.spinOne)}/>
            <div className={cn(styles.two, styles.spinTwo)} />
            <div className={cn(styles.three, styles.spinOne)} />
          </div>
          <p>{description}</p>
          <Link to="/" className="text-[#4da187] font-bold underline underline-offset-2">Go home</Link>
        </div>
      </div>
    </div>
  );
};
