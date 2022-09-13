import React, { FC, ReactNode } from 'react';

import { cls } from '../../../utils';
import { Icon, IconName } from '../Icon/Icon';

export type ButtonCircleProps = {
  onClick: () => void;
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary';
  children?: ReactNode;
  icon: IconName;
  isIconOutlined: boolean;
};

const classes: any = {
  base:
    'cursor-pointer rounded-full font-bold flex max-h-11 max-w-2xl p-2 flex items-center justify-center',
  disabled: 'opacity-50 cursor-not-allowed',
  variant: {
    primary:
      'bg-white text-black hover:bg-slate-200 focus:ring focus:ring-1 focus:ring-white focus:ring-offset-black focus:ring-offset-2',
    secondary:
      'bg-gray-900/60 text-white hover:bg-gray-900/90 focus:ring-1 border-white border focus:ring-white focus:ring-offset-slate-500 focus:ring-offset-2',
  },
};

export const ButtonCircle: FC<ButtonCircleProps> = ({
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
          }`}
        />
      )}
      {children}
    </button>
  );
};
