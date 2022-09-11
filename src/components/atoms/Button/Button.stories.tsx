import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Off = Template.bind({});
Off.args = {
  label: 'foo',
};
