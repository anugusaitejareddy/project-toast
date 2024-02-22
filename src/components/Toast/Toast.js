import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
<<<<<<< HEAD

import { ToastContext } from "../ToastProvider/ToastProvider.js";
=======
>>>>>>> a5b882ad882eb91033e073a7da5107e98c1ccee7

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

<<<<<<< HEAD
function Toast({ id, children, variant }) {
  const { deleteToast } = React.useContext(ToastContext);

  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles.notice} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button onClick={() => deleteToast(id)} className={styles.closeButton}>
=======
function Toast({ variant, message, index, setToastArr, toastArr }) {
  const Icon = ICONS_BY_VARIANT[variant];
  function handleDismiss(index) {
    toastArr[index].isDismissed = true;
    setToastArr([...toastArr]);
  }
  return (
    <div className={`${styles.toast} ${styles.Icon} ${styles[variant]}`}>
      <div className={`${styles.iconContainer} `}>
        <Icon size={24} />
      </div>
      <p className={`${styles.content} `}>{message}</p>
      <button
        onClick={() => {
          handleDismiss(index);
        }}
        className={styles.closeButton}
      >
>>>>>>> a5b882ad882eb91033e073a7da5107e98c1ccee7
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
