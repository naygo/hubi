interface ButtonProps {
  label: string;
  outline?: boolean;
}

import styles from "./styles.module.css";

export const Button = ({ label, outline = false }: ButtonProps) => {
  return (
    <button className={`${outline ? styles.outlineButton : styles.defaultButton}`}>
      {label}
    </button>
  );
};
