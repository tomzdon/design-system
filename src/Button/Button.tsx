import React, { type FC, type ReactNode } from 'react';
import clsx from 'clsx';

export type ButtonProps = {
  title?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'outline';
  type?: 'submit' | 'reset' | 'button';
  size?: 'medium' | 'large';
  icon?: ReactNode;
  isLoading?: boolean;
  className?: string;
  fullwidth?: boolean;
  titleClassName?: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent: FC<ButtonProps> = (props) => {
  const {
    title,
    disabled = false,
    variant = 'primary',
    type = 'button',
    size = 'medium',
    icon,
    className = '',
    fullwidth,
    style,
    onClick,
    isLoading,
    titleClassName,
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={clsx(
        className,
        'cursor-pointer uppercase items-center border-0 rounded-none shadow-none inline-flex justify-center relative gap-2 align-middle whitespace-nowrap',
        {
          'w-100': fullwidth,
          'bg-primary': variant === 'primary',
          'bg-darker text-white': variant === 'secondary',
          'bg-dark border border-white': variant === 'tertiary',
          'bg-transparent border border-dark text-darker':
            variant === 'outline',
          'bg-transparent text-darker gap-4': variant === 'text',
          'py-[7px] px-[8px]': size === 'medium',
          'py-[10px] px-[20px]': size === 'large',
          'cursor-not-allowed text-light bg-lighter': disabled,
        },
      )}
      style={style}
      disabled={disabled}
      onClick={onClick}
      {...rest}>
      <>
        {icon && <span className="fs-16">{icon}</span>}
        {title && <span className={clsx(titleClassName)}>{title}</span>}
      </>
    </button>
  );
};

export const Button = React.memo(ButtonComponent);
