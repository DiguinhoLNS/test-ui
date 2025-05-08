import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text' },
        onClick: { action: 'clicked' },
        status: {
            control: { type: 'select' },
            options: ['danger', 'success', 'warning', 'info', undefined],
        },
    },
    args: {
        status: undefined,
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

export const StatusSuccess: Story = {
    args: {
        text: 'Sucesso',
        status: 'success',
    },
};

export const StatusDanger: Story = {
    args: {
        text: 'Erro',
        status: 'danger',
    },
};

export const StatusWarning: Story = {
    args: {
        text: 'Atenção',
        status: 'warning',
    },
};

export const StatusInfo: Story = {
    args: {
        text: 'Informação',
        status: 'info',
    },
};

export const StatusDefault: Story = {
    args: {
        text: 'Padrão',
        status: undefined,
    },
};
