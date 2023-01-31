import React from 'react';
import { Button } from '@kbant/app';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CenterView from '../CenterView';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => (
  <CenterView>
    <Button text='Hello World' color='blue' textColor='white' />
  </CenterView>
);
