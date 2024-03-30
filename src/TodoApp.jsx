import { useState } from "react";
import Heading from "./components/Heading.jsx";
import Input from "./components/Input.jsx";
import Button from "./components/Button.jsx";
import TaskList from "./components/TaskList.jsx";
import { IoAddCircle } from "react-icons/io5";
import styles from "./customStyles/TodoApp.module.css";
import { TiTick } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import ErrorMessage from "./components/ErrorMessage.jsx";
import SectionHeading from "./components/SectionHeading";
import { MdDelete } from "react-icons/md";

export default function TodoApp() {
  const [todoTask, setTodoTask] = useState({ name: "", date: "" });
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  function onChangeHandleName(event) {
    setTodoTask({ ...todoTask, name: event.target.value });
  }

  function onChangeHandleDate(event) {
    setTodoTask({ ...todoTask, date: event.target.value });
  }

  function addNewTask() {
    setPendingTasks((prevPendingTasks) => [...prevPendingTasks, todoTask]);
    setTodoTask({ name: "", date: "" });
  }

  function removeTask(name, date) {
    const removeTaskObject = { name, date };
    setPendingTasks((prevPendingTasks) =>
      prevPendingTasks.filter(
        (task) => task.name !== name || task.date !== date
      )
    );
  }

  function markTaskComplete(name, date) {
    const completedTask = { name, date };
    setCompletedTasks((prevCompletedTasks) => [
      ...prevCompletedTasks,
      completedTask,
    ]);
    setPendingTasks((prevPendingTasks) =>
      prevPendingTasks.filter(
        (task) => task.name !== name || task.date !== date
      )
    );
  }

  function markTaskUnComplete(name, date) {
    const unCompletedTask = { name, date };
    setPendingTasks((prevPendingTasks) => [
      ...prevPendingTasks,
      unCompletedTask,
    ]);
    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks.filter(
        (task) => task.name !== name || task.date !== date
      )
    );
  }

  return (
    <div>
      <Heading headingContent="TODO APPLICATION" />
      <div className={styles.addTasks}>
        <h2 style={{ color: "white" }}>Add your tasks here</h2>
        <div className={styles.takeInput}>
          <Input
            type="text"
            value={todoTask.name}
            placeholder="Enter your pending task"
            onChange={onChangeHandleName}
          />
          <Input
            type="date"
            value={todoTask.date}
            onChange={onChangeHandleDate}
          />
          <Button buttonValue={<IoAddCircle />} onClickHandle={addNewTask} />
        </div>
      </div>
      {pendingTasks.length === 0 && completedTasks.length === 0 ? (
        <ErrorMessage errorMessage="No tasks available" />
      ) : (
        <div className={styles.displayTasks}>
          <div className={styles.pendingTasks}>
            <SectionHeading sectionHeading="Pending Tasks" />
            {pendingTasks.length === 0 ? (
              <ErrorMessage errorMessage="No tasks as of now" />
            ) : (
              <TaskList
                completedTasks={pendingTasks}
                buttonValueRemove={<MdDelete />}
                buttonValueComplete={<TiTick />}
                handleButtonRemove={removeTask}
                handleButtonComplete={markTaskComplete}
              />
            )}
          </div>
          <div className={styles.completedTasks}>
            <SectionHeading sectionHeading="Completed Tasks" />
            {completedTasks.length === 0 ? (
              <ErrorMessage errorMessage="Please complete the tasks" />
            ) : (
              <TaskList
                completedTasks={completedTasks}
                buttonValueRemove={null}
                buttonValueComplete={<AiOutlineClose />}
                handleButtonRemove={null}
                handleButtonComplete={markTaskUnComplete}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
