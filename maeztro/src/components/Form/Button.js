import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, style, ...props }) => {
  return (
    <button {...props} className={styles.button} style={style}>
      {children}
    </button>
  );
};

export default Button;
