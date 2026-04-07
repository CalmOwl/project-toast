import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            message={toast.message}
            onClose={() => {
              const lessToasts = toasts.filter((item) => item.id !== toast.id);
              setToasts(lessToasts);
            }}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
