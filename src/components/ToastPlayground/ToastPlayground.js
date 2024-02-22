import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

<<<<<<< HEAD
import ToastShelf from "../ToastShelf/ToastShelf.js";

import { ToastContext } from "../ToastProvider/ToastProvider.js";
=======
import ToastShelf from "../ToastShelf/ToastShelf";
>>>>>>> a5b882ad882eb91033e073a7da5107e98c1ccee7

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
<<<<<<< HEAD
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const { createToast } = React.useContext(ToastContext);
=======
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const [toastArr, setToastArr] = React.useState([]);

  function pushToast(variant, message) {
    const newToast = {
      variant,
      message,
      isDismissed: false,
      id: Math.random(),
    };
    setToastArr([...toastArr, newToast]);
    setVariant("notice");
    setMessage("");
  }
>>>>>>> a5b882ad882eb91033e073a7da5107e98c1ccee7

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
<<<<<<< HEAD

      <ToastShelf />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createToast(message, variant);
          setMessage("");
          setVariant(VARIANT_OPTIONS[0]);
=======
      <ToastShelf toastArr={toastArr} setToastArr={setToastArr} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          pushToast(variant, message);
>>>>>>> a5b882ad882eb91033e073a7da5107e98c1ccee7
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                required={true}
                className={styles.messageInput}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => (
<<<<<<< HEAD
                <label htmlFor={`variant-${option}`} key={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
=======
                <label htmlFor={`variant-${option}`}>
                  <input
                    type="radio"
                    value={option}
                    name="variant"
                    id={`variant-${option}`}
                    key={`variant-${option}`}
                    checked={variant === option}
>>>>>>> a5b882ad882eb91033e073a7da5107e98c1ccee7
                    onChange={(e) => {
                      setVariant(e.target.value);
                    }}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
<<<<<<< HEAD
              <Button>Pop Toast!</Button>
=======
              <Button type="submit">Pop Toast!</Button>
>>>>>>> a5b882ad882eb91033e073a7da5107e98c1ccee7
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
