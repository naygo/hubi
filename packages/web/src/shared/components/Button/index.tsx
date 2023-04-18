import styles from "./styles.module.css";

interface ButtonProps {
  label: string;
  outline?: boolean;
}

export const Button = ({ label, outline = false }: ButtonProps) => {
  return (
    <main>
      <button
        className={`
          ${outline ? styles.outlineButton : styles.defaultButton}
          rounded-full 
          py-2
          px-4 
          font-semibold 
          text-lg 
          relative
        `}
      >
        {outline && (
          <span
            className={styles.buttonHoleLeft}
            style={{ backgroundColor: "var(--blue)" }}
          ></span>
        )}
        {outline && (
          <span
          className={styles.buttonHoleRight}
          style={{ backgroundColor: "var(--blue)" }}
        ></span>
        )}
        {label.toUpperCase()}
      </button>
    </main>
  );
};
