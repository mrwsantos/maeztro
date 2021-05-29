import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, style, classAdded, ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${classAdded}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
