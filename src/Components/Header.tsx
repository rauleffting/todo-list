import { InputHTMLAttributes, useState } from 'react';

import { PlusCircle } from 'phosphor-react';

import styles from './Header.module.css';

import logo from '../assets/rocket.svg';

interface AddTask {
  handleAddTask: (content: string) => void;
}

export function Header({ handleAddTask }: AddTask) {
  const[content, setContent] = useState('')

  function handleSetContent(event: React.ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  function handleAdd(){
    handleAddTask(content);
    setContent('');
  }

  return(
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logotype"/>
      
        <strong className={styles.to}>to</strong>
        <strong className={styles.do}>do</strong>
      </div>

      <div className={styles.wrapper}>
        <input 
          type="text" 
          placeholder="Add a new task" 
          value={content}
          className={styles.input}
          onChange={handleSetContent}
        />
      <button 
        className={styles.button}
        onClick={handleAdd}
      >
        <span>Create</span>
        <PlusCircle size={16} />
      </button>
      </div>

    </div>
  );
}