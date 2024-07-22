import { FunctionComponent, ReactNode, MouseEvent } from 'react';
import styles from './Button.module.scss';

interface IProps {
  children: ReactNode;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}

const Button: FunctionComponent<IProps> = ({
  children,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
