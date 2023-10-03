import { InfoContentComponent } from './InfoContentComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/InfoContentComponent',
  component: InfoContentComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InfoContentComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    label: 'ユーザー名',
    content: 'xxxxxx',
  },
};
