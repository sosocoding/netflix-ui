import React from 'react';
import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';

export type IconName = keyof typeof SolidIcons;

export type IconProps = {
  icon: IconName;
  isOutlined?: boolean;
  className?: string;
};

export const Icon = ({ icon, isOutlined = false, className }: IconProps) => {
  const Icon = isOutlined ? OutlineIcons[icon] : SolidIcons[icon];

  return <Icon className={`w-7 h-7 text-white ${className}`} />;
};
