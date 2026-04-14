import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';

import styles from './ToastShelf.module.css';


function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            message={toast.message}
            onClose={() => { removeToast(toast.id) }}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
