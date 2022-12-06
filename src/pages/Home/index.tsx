import crypto from "crypto"
import { useState } from 'react'
import { FiPlus } from "react-icons/fi"

import TaskItem, { ITask } from '../../components/TaskItem'
import styles from './styles.module.scss'

const Home = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTask, setNewTask] = useState("")


  function addTask() {
    setTasks(state => [...state, {
      id: String(crypto.randomBytes(6)),
      title: newTask,
      complete: false
    }])
  }

  return (
    <div className={styles.container}>
      <section>
        <input className={styles.titleField} type="text" placeholder="Titulo" />

        <form>
          <input type="text" placeholder="Adicionar Task" />

          <button className={styles.addTaskButton}>
            <FiPlus size={18} color="#fff" />
          </button>
        </form>

        <main className={styles.tasks}>
          <ul>
            {tasks.map(item => (
              <TaskItem
                key={item.id}
                task={item}
              />
            ))}
          </ul>
        </main>
      </section>
    </div>
  )
}

export default Home