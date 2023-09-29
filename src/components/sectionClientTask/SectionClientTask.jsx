import { useState } from "react";
import styles from "../../styles/SectionClientTask.module.css";
import { UiButton } from "../UI/UiButton";
import {FormTask} from '../formTask/FormTask'


export function SectionClientTask() {
  const [task, setTask] = useState("");

   const autoChoiceTask = (value)=>{
    setTask(value)
  }


  return (
    <div id="services"  className={styles.taskContainer}>
      <h1>
        <span className={styles.activeText}>РЕШАЕМ ВАШИ</span> ЗАДАЧИ
      </h1>
      <div className={styles.resolveContainer}>
        <div className={styles.btnContainer}>
          <UiButton task={task} autoChoiceTask={autoChoiceTask}   variant="btnTask"></UiButton>

        </div>
        <FormTask setTask={setTask} task={task}></FormTask>
      </div>
    </div>
  );
}
