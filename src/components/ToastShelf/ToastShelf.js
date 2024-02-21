import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

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
    </ol>
  );
}

export default ToastShelf;
