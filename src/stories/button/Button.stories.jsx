import React from 'react';

import { TheButton } from './Button.jsx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tanzanite/Component/Button',
  component: TheButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TheButton {...args} />;

export const Rounded = Template.bind({});
Rounded.args = {
  shape: 'rounded',
  label: 'Button',
  colorScheme: 'blue'
};

export const SlightlyRounded = Template.bind({});
SlightlyRounded.args = {
  shape: 'slightlyRounded',
  label: 'Button',
  colorScheme: 'blue'
};

export const Squared = Template.bind({});
Squared.args = {
  shape: 'squared',
  label: 'Button',
  colorScheme: 'blue'
};
