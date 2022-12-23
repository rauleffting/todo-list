import clipboard from '../assets/clipboard.svg';

import styles from './Message.module.css';

export function Message() {
  return(
    <div className={styles.message}>
      <img src={clipboard} alt="prancheta" />
      <strong>You have no tasks yet</strong>
      <span>Create tasks and organize your to-do items</span>
    </div>
  );
}