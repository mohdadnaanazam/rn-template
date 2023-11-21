import React from 'react';
import {PrimaryButton as PB, OutlineButton as OB} from './Button';

export default {
  title: 'components/Button',
};

export const PrimaryButton = (args: {title: string}) => <PB {...args} />;

PrimaryButton.args = {
  title: 'Primary button',
};

export const OutlineButton = (args: {title: string}) => <OB {...args} />;

OutlineButton.args = {
  title: 'Outline button',
};
