import { FunctionComponent, HTMLInputTypeAttribute, forwardRef } from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

type InputProps = {
  className?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
};

const Input: FunctionComponent<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, placeholder, type, ...props }, ref) => {
  return (
    <input
      className={cn(styles.input, className)}
      type={type}
      ref={ref}
      placeholder={placeholder}
      {...props}
    />
  );
});

export default Input;
