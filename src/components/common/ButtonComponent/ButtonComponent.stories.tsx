import { ButtonComponent } from './ButtonComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/ButtonComponent',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    label: '送信',
    color: 'red',
  },
};
export const Blue: Story = {
  args: {
    label: '送信',
    color: 'blue',
  },
};
