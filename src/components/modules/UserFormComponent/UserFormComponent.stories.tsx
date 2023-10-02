import { UserFormComponent } from './UserFormComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/UserFormComponent',
  component: UserFormComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserFormComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    user: {
      email: 'ry-tanaka@sios.com',
      name: 'ryu',
      uuid: 'xxxx-xxx-xxx',
    },
    submitData: async () => {
      return;
    },
  },
};
