import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonCircle, ButtonCircleProps } from './ButtonCircle';

export default {
  title: 'Atoms/ButtonCircle',
  component: ButtonCircle,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonCircleProps>;

const Template: Story<ButtonCircleProps> = args => <ButtonCircle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: 'PlayIcon',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  icon: 'HandThumbUpIcon',
  isIconOutlined: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  icon: 'PlayIcon',
};
