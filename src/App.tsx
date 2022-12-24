import { useState } from 'react';

import { Header } from './Components/Header';
import { Message } from './Components/Message';
import { Task } from './Components/Task';

import styles from './App.module.css';
import './global.css';

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [concludedTasks, setConcludedTasks] = useState(0);

  function handleRemove(oldTask: string, concluded: number){
    let updatedTasks = tasks.filter(task => task !== oldTask);
    setTasks([...updatedTasks]);
    setConcludedTasks(prevState => prevState + concluded);
  }

  function handleAddTask(content: string){
    setTasks([...tasks, content]);
  }

  function handleChangeConcludedTasks(concluded: number) {
    setConcludedTasks(prevState => prevState + concluded);
  }

  return (
    <div className={styles.container}>
      <Header handleAddTask={handleAddTask}/>
      
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.wrapper}>
            <span className={styles.created}>Tasks</span>
            <span className={styles.counter}>{tasks.length}</span>
          </div>

          <div className={styles.wrapper}>
            <span className={styles.done}>Finished</span>
            {
              tasks ? 
              <span className={styles.counter}>{concludedTasks} of {tasks.length}</span> :
              <span className={styles.counter}>0</span>
            }  
          </div>
        </div>

        <div className={styles.tasks}>
          {
            tasks.length == 0 ? 
            <Message /> : 
            tasks.map(task => {
              return <Task 
                        key={task} 
                        content={task} 
                        handleRemove={handleRemove} 
                        handleChangeConcludedTasks={handleChangeConcludedTasks}
                      />
            })
          }
        </div>
      </div>
    </div>
  )
}