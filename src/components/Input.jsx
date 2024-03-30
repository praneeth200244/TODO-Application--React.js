import styles from "../customStyles/Input.module.css";

export default function Input({ type, value, onChange, placeholder = "" }) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={styles.inputStyles}
      onChange={onChange}
    />
  );
}
