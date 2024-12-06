import { cn } from '@/shared/utils';
import styles from '../styles/index.module.scss';

export const UnderMaintenance = () => {
  return (

    <div className="container">
      <div className={styles.box}>
        <div className={styles.animation}>
          <div className={cn(styles.one, styles.spinOne)}/>
          <div className={cn(styles.two, styles.spinTwo)} />
          <div className={cn(styles.three, styles.spinOne)} />
        </div>
        <h1>Under maintenance</h1>
        <p>Update is in progress. Please check the page later.</p>
      </div>
    </div>);
};
