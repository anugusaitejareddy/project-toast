import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
<<<<<<< HEAD

import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toastArr } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toastArr.map(({ message, id, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
=======

function ToastShelf({ toastArr, setToastArr }) {
  return (
    <ol className={styles.wrapper}>
      {toastArr.map(
        ({ variant, message, id, isDismissed }, index) =>
          !isDismissed && (
            <li key={index} className={styles.toastWrapper}>
              <Toast
                key={id}
                variant={variant}
                message={message}
                index={index}
                setToastArr={setToastArr}
                toastArr={toastArr}
              ></Toast>
            </li>
          )
      )}
>>>>>>> a5b882ad882eb91033e073a7da5107e98c1ccee7
    </ol>
  );
}

export default ToastShelf;
