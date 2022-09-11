import React, { FC } from 'react';

export type ButtonProps = {
  label: string;
};

export const Button: FC<ButtonProps> = ({ label }) => {
  return <div className="bg-red-700 p-3 text-white rounded-sm">{label}</div>;
};
