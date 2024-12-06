import { Link } from 'react-router';
import { NavLink } from '@/shared/ui';
import styles from '../styles/index.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <Link className={styles.logo} to="/">
          pd.finance
        </Link>

        <nav className={styles.nav}>
          <ul>
            <NavLink to="/" label="Home" />
            <NavLink to="/shopping-list" label="Shopping List" />
            <NavLink to="/users" label="Users" />
          </ul>
        </nav>
      </div>
    </div>
  );
};
