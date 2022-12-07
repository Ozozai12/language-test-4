import css from '../components/App.module.css';

export function FlagUa() {
  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg"
        alt="UA Flag"
        className={css.flag}
      />
    </div>
  );
}
