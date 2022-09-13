import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Icon, IconProps } from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta<IconProps>;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  icon: 'PlayIcon',
  isOutlined: true,
};

export const Full = Template.bind({});
Full.args = {
  icon: 'PlayIcon',
  isOutlined: false,
};
