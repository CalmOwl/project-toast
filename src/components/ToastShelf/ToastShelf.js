import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import useEscapeKey from '../../hooks/useEscapeKey';

import styles from './ToastShelf.module.css';


function ToastShelf() {
  const { toasts, removeToast, removeAllToasts } = React.useContext(ToastContext);

  useEscapeKey(removeAllToasts);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
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
