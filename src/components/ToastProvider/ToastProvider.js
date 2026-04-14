import React from 'react';

export const ToastContext = React.createContext();


function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, variant) => {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };

    setToasts(prev => [...prev, newToast]);
  }

  const removeToast = (id) => {
    setToasts(prev => prev.filter((item) => item.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
