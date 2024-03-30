import Task from "./Task";
import styles from "../customStyles/TaskList.module.css";

export default function TaskList({
  completedTasks,
  buttonValueRemove,
  buttonValueComplete,
  handleButtonRemove,
  handleButtonComplete,
}) {
  return (
    <div className={styles.tasklist}>
      {completedTasks.map((item) => (
        <Task
          key={item.name}
          taskName={item.name}
          taskDate={item.date}
          buttonValueRemove={buttonValueRemove}
          buttonValueComplete={buttonValueComplete}
          handleButtonRemove={handleButtonRemove}
          handleButtonComplete={handleButtonComplete}
        />
      ))}
    </div>
  );
}
