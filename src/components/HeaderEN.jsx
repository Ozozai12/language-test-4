import { Link, useLocation } from 'react-router-dom';
import css from './Header.module.css';

export const HeaderEN = () => {
  const location = useLocation();

  return (
    <div className={css.header}>
      <span className={css.logo}>Lang test</span>
      <div className={css.navContainer}>
        <Link to="/en" className={css.navItem}>
          Greetings
        </Link>
        <Link to="flag" className={css.navItem}>
          Flag
        </Link>
      </div>
      <div className={css.langContainer}>
        <Link to="#" className={css.langItem}>
          ENG
        </Link>
        <Link to={`/${location.pathname.slice(3)}`} className={css.langItem}>
          UA
        </Link>
      </div>
    </div>
  );
};
