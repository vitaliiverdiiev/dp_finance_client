import { Link, NavLink } from 'react-router';
import styles from '../styles/index.module.scss';

import Logo from '$/dp-finance-logo-red.svg?react';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>

        <nav className={styles.nav}>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'text-black'
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink 
              to="/shopping-list"
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'text-black'
              }  
            >
              <li>Shopping List</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};
