import styles from './Button.module.css';

import { PlusCircle } from 'phosphor-react';

export function Button() {
  return(
    <div className={styles.button}>
      <span>Create</span>
      <PlusCircle size={16} />
    </div>
  );
}