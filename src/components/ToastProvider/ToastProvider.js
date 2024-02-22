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
}

export default ToastProvider;
