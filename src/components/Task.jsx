import styles from "../customStyles/Task.module.css";
import Button from "./Button";

export default function Task({
  taskName,
  taskDate,
  buttonValueRemove,
  buttonValueComplete,
  handleButtonRemove,
  handleButtonComplete,
}) {
  return (
    <div className={styles.task}>
      <p className={styles.taskName}>{taskName}</p>
      <p className={styles.taskDate}>{taskDate}</p>
      {buttonValueRemove && (
        <Button
          buttonValue={buttonValueRemove}
          onClickHandle={() => {
            handleButtonRemove(taskName, taskDate);
          }}
        />
      )}
      <Button
        buttonValue={buttonValueComplete}
        onClickHandle={() => {
          handleButtonComplete(taskName, taskDate);
        }}
      />
    </div>
  );
}
