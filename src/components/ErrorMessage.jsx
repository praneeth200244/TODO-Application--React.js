import styles from "../customStyles/ErrorMessage.module.css";

export default function ErrorMessage({ errorMessage }) {
  return (
    <div className={styles.errorMessage}>
      <p>{errorMessage}</p>
    </div>
  );
}
