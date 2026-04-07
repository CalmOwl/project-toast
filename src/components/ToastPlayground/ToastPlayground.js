import React from 'react';
import ToastShelf from '../ToastShelf';
import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

/*
function MyComponent() {
  const [toasts, {
    addToast, // (message, variant) => id
    removeToast // (id)
  }] = useToasts()

  return <ToastShelf onRemoveToast={removeToast} />
}

function useToasts() {
  const [toasts, setToasts] = React.useState([]);

  const api = {
    addToast: (message, variant) => {
      const newToast = {
        id: crypto.randomUUID(),
        message,
        variant,
      };

      const nextToasts = [...toasts, newToast];
      setToasts(nextToasts);
      return newToast.id;
    },

    removeToast: (id) => {
      const lessToasts = toasts.filter((item) => item.id !== toast.id);
      setToasts(lessToasts);
    }
  }

  return [
    toasts,
    api
  ]
}
*/

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} setToasts={setToasts}/>

      <form
        className={styles.controlsWrapper}
        onSubmit={event => {
          event.preventDefault();

          const newToast = {
            id: crypto.randomUUID(),
            message,
            variant,
          };

          const nextToasts = [...toasts, newToast];
          setToasts(nextToasts);
          setMessage('');
          setVariant('notice');
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={event => { setMessage(event.target.value) }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(option => (
              <div key={option}>
                <label htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                    onChange={event => {
                      setVariant(event.target.value);
                    }}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
