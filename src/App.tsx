import { useState } from 'react';

import { Header } from './Components/Header';
import { Message } from './Components/Message';
import { Task } from './Components/Task';

import styles from './App.module.css';
import './global.css';

export function App() {
  const [noTask, setNoTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
  ])

  function handleRemove(content: string){
    let updatedTasks = tasks.filter(task => task.content !== content);
    setTasks([...updatedTasks]);
    if(tasks == null){
      setNoTask(true);
    }
    console.log(tasks);
  }

  function handleAddTask(content: string){
    setTasks([...tasks, content]);
  }

  return (
    <div className={styles.container}>
      <Header handleAddTask={handleAddTask}/>
      
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.wrapper}>
            <span className={styles.created}>Tasks</span>
            <span className={styles.counter}>0</span>
          </div>

          <div className={styles.wrapper}>
            <span className={styles.done}>Finished</span>
            <span className={styles.counter}>0</span>
          </div>
        </div>

        <div className={styles.tasks}>
          {
            noTask ? <Message /> : 
            tasks.map(task => {
              return <Task key={task.content} content={task.content} handleRemove={handleRemove} />
            })
          }
        </div>
      </div>
    </div>
  )
}