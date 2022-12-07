import css from '../components/App.module.css';

export function FlagEn() {
  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png"
        alt="ENG Flag"
        className={css.flag}
      />
    </div>
  );
}
