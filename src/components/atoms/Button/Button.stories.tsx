import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = args => <Button {...args}>Lecture</Button>;

export const Primary = Template.bind({});
Primary.args = {
  icon: 'PlayIcon',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  icon: 'InformationCircleIcon',
  isIconOutlined: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  icon: 'PlayIcon',
};
