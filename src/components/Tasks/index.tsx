import { FormEvent, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import TaskItem, { ITask } from '../TaskItem'
import styles from './styles.module.scss'


interface ITasks {
  id: string,
  title: string,
  tasks: ITask[]
}

interface ITasksProps {
  newTask: string,
  onChangeNewTasks: (value: string) => void,
}

const Tasks = ({ newTask, onChangeNewTasks }: ITasksProps) => {
  const [tasks, setTasks] = useState<ITasks>({
    id: "0",
    title: "",
    tasks: []
  })


  function addTask(e: FormEvent) {
    e.preventDefault()

    const updatedTasks = [...tasks.tasks, {
      id: String(tasks.tasks.length),
      title: newTask,
      complete: false
    }]

    setTasks(state => ({
      id: state.id,
      title: state.title,
      tasks: updatedTasks
    }))

    onChangeNewTasks("")
  }

  function handleChangeTaskState(value: boolean, id: string) {
    const updatedTasks = tasks.tasks.map((item) => {
      if (id == item.id) {
        return {
          id: item.id,
          title: item.title,
          complete: value
        }
      }

      return item
    })


    setTasks(state => (
      {
        id: state.id,
        title: state.title,
        tasks: updatedTasks
      }
    ))
  }

  function handleDeleteTask(id: string) {
    const filteredTasks = tasks.tasks.filter((item) => item.id != id)

    setTasks(state => ({
      id: state.id,
      title: state.title,
      tasks: filteredTasks
    }))
  }

  function handleSetTitle(value: string) {
    setTasks(state => ({
      id: state.id,
      title: value,
      tasks: state.tasks
    }))
  }

  return (
    <div className={styles.tasks}>
      <section>
        <input
          className={styles.titleField}
          type="text"
          placeholder="Titulo"
          value={tasks.title}
          onChange={e => handleSetTitle(e.target.value)}
        />

        <form onSubmit={addTask}>
          <input
            type="text"
            placeholder="Adicionar Task"
            value={newTask}
            onChange={(e) => onChangeNewTasks(e.target.value)}
          />

          <button className={styles.addTaskButton}>
            <FiPlus size={18} color="#fff" />
          </button>
        </form>

        <main className={styles.tasks}>
          <ul>
            {tasks.tasks.map(item => (
              <TaskItem
                key={item.id}
                task={item}
                onChangeTaskState={handleChangeTaskState}
                onChangeDeleteTask={handleDeleteTask}
              />
            ))}
          </ul>
        </main>
      </section>
    </div>
  )
}

export default Tasks