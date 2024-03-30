import styles from "../customStyles/Button.module.css";

export default function Button({ buttonValue, onClickHandle }) {
  return (
    <button
      onClick={onClickHandle}
      className={styles.customButton}
      type="button"
    >
      {buttonValue}
    </button>
  );
}
