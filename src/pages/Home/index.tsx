import { useState } from 'react'
import Tasks from '../../components/Tasks'
import styles from './styles.module.scss'

const Home = () => {
  const [newTask, setNewTask] = useState("")


  return (
    <div className={styles.container}>
      <Tasks
        newTask={newTask}
        onChangeNewTasks={setNewTask}
      />
    </div>
  )
}

export default Home