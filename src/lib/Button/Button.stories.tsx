import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text' },
        onClick: { action: 'clicked' },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'Clique aqui',
  },
};

export const WithCustomText: Story = {
  args: {
    text: 'Enviar',
  },
};
