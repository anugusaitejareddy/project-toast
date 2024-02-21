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

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

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
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
