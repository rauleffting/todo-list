import { useState } from 'react';

import { Circle, CheckCircle, Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface taskProps {
  content: string,
  handleRemove: (task: string, concluded: number) => void;
  handleChangeConcludedTasks: (concluded: number) => void;
}

export function Task({ content, handleRemove, handleChangeConcludedTasks, ...rest }: taskProps) {
  const [checked, setChecked] = useState(false);

  function handleCheck(){
    if(checked){
      setChecked(false);
      let concluded = -1;
      handleChangeConcludedTasks(concluded);
    } else {
      setChecked(true);
      let concluded = 1;
      handleChangeConcludedTasks(concluded);
    }
  }

  function handleRemoveTask(){
    if(checked){
      let concluded = -1;
      handleRemove(content, concluded);
    } else {
      let concluded = 0;
      handleRemove(content, concluded)
    }
  }

  return(
    <div 
      className={styles.task}
      {...rest}
    >
      <button 
        className={styles.buttonCheck}
        onClick={handleCheck}
      >
        {
          checked ? 
          <CheckCircle size={24} className={styles.checkedCircle} /> : 
          <Circle size={24} className={styles.uncheckedCircle} /> 
        }
      </button>
      <span className={checked ? styles.spanChecked : styles.span}>
        {content}
      </span>
      <button 
        className={styles.buttonRemove}
        onClick={handleRemoveTask}
      >
        <Trash size={24} />
      </button>
    </div>
  );
}