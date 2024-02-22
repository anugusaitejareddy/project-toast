<<<<<<< HEAD
import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastArr, setToastArr] = React.useState([]);
  const value = { toastArr, createToast, deleteToast };

  function createToast(message, variant) {
    const nextToasts = [
      ...toastArr,
      { message, variant, id: crypto.randomUUID() },
    ];
    setToastArr([...nextToasts]);
  }

  function deleteToast(id) {
    const nextToasts = toastArr.filter((toast) => toast.id !== id);

    setToastArr([...nextToasts]);
  }

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
=======
import React from 'react';

function ToastProvider() {
  return <div></div>;
>>>>>>> a5b882ad882eb91033e073a7da5107e98c1ccee7
}

export default ToastProvider;
