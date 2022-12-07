import { FiTrash2 } from 'react-icons/fi'
import styles from './styles.module.scss'


export interface ITask {
  id: string,
  title: string,
  complete: boolean
}

interface ITaskProps {
  task: ITask,
  onChangeTaskState: (value: boolean, id: string) => void
  onChangeDeleteTask: (id: string) => void
}

const TaskItem = ({ task, onChangeTaskState, onChangeDeleteTask }: ITaskProps) => {
  return (
    <li className={`${styles.taskItem} ${task.complete && styles.completed}`}>
      <button className={styles.deleteTaskButton} onClick={() => onChangeDeleteTask(task.id)}>
        <FiTrash2 size={14} color="var(--color-red)" />
      </button>

      <input
        type="checkbox"
        id={task.title}
        defaultValue=""
        onChange={e => onChangeTaskState(e.target.checked, task.id)}
      />

      <label htmlFor={task.title}>{task.title}</label>
    </li>
  )
}

export default TaskItem