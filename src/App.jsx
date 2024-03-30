import TodoApp from "./TodoApp";
import styles from "./customStyles/App.module.css";

function App() {
  return (
    <div className={styles.application}>
      <TodoApp />
    </div>
  );
}

export default App;
