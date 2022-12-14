import React, { FC, ReactNode } from 'react';

import { cls } from '../../../utils';
import { Icon, IconName } from '../Icon/Icon';

export type ButtonProps = {
  onClick: () => void;
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary';
  children?: ReactNode;
  icon?: IconName;
  isIconOutlined?: boolean;
};

const classes: any = {
  base: 'cursor-pointer rounded font-bold flex items-center',
  disabled: 'opacity-50 cursor-not-allowed',
  variant: {
    primary:
      'bg-white text-black hover:bg-white/75 focus:ring focus:ring-2 focus:ring-white focus:ring-offset-black focus:ring-offset-2 focus:rounded-lg py-2 px-6',
    secondary:
      'bg-neutral-500/70 text-white hover:bg-neutral-500/40 focus:ring-2 focus:ring-white focus:ring-offset-slate-500 focus:ring-offset-2 focus:rounded-lg py-2 px-6',
  },
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  isDisabled = false,
  variant = 'primary',
  icon,
  isIconOutlined = false,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={cls(`
                ${classes.base}
                ${classes.variant[variant]}
                ${isDisabled && classes.disabled}
            `)}
      {...props}
    >
      {icon && (
        <Icon
          icon={icon}
          isOutlined={isIconOutlined}
          className={`${
            variant === 'primary' ? 'text-slate-800' : 'text-white'
          } mr-2`}
        />
      )}
      {children}
    </button>
  );
};
