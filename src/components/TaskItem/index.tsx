import styles from './styles.module.scss'


export interface ITask {
  id: string,
  title: string,
  complete: boolean
}

interface ITaskProps {
  task: ITask
}

const TaskItem = ({ task }: ITaskProps) => {
  return (
    <li className={`${styles.taskItem} ${task.complete && styles.completed}`}>
      <input
        type="checkbox"
        id={task.title}
      />

      <label htmlFor={task.title}>{task.title}</label>
    </li>
  )
}

export default TaskItem