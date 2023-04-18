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
          transition
          duration-200
        `}
      >
        {label.toUpperCase()}
      </button>
    </main>
  );
};
