import { HeaderComponent } from './HeaderComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/HeaderComponent',
  component: HeaderComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
