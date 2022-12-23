import { useState } from 'react';

import { Circle, CheckCircle, Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface taskProps {
  content: string,
  handleRemove: (task: string) => void;
}

export function Task({ content, handleRemove, ...rest }: taskProps) {
  const [checked, setChecked] = useState(false);

  function handleCheck(){
    checked ? setChecked(false) : setChecked(true);
  }

  function handleRemoveTask(){
    handleRemove(content);
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