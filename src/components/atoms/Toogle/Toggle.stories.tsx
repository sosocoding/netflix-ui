import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToggleSwitch, ToggleSwitchProps } from './Toggle';

const meta: Meta = {
  title: 'Atoms/Toggle Switch',
  component: ToggleSwitch,
  argTypes: {
    onChange: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ToggleSwitchProps> = args => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};

export const Active = Template.bind({});
Active.args = {
  enabled: true,
};
