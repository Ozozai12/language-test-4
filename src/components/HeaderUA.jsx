import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { useLocation } from "react-router-dom";

export const HeaderUA = () => {
  const location = useLocation();

  return (
    <div className={css.header}>
      <span className={css.logo}>Тест мови</span>
      <div className={css.navContainer}>
        <Link to="/" className={css.navItem}>
          Привітання
        </Link>
        <Link to="flag" className={css.navItem}>
          Прапор
        </Link>
      </div>
      <div className={css.langContainer}>
        <Link to={`/en${location.pathname}`} className={css.langItem}>
          ENG
        </Link>
        <Link to="#" className={css.langItem}>
          UA
        </Link>
      </div>
    </div>
  );
};
