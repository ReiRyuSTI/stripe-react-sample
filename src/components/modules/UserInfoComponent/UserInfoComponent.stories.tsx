import { UserInfoComponent } from './UserInfoComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/UserInfoComponent',
  component: UserInfoComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UserInfoComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    user: {
      email: 'xxx',
      name: 'xxxxx',
      card: {
        brand: 'VISA',
        exp_month: 'ddd',
        exp_year: 'ddd',
        last4: 'xxx',
      },
    },
  },
};
export const CardNonData: Story = {
  args: {
    user: {
      email: 'xxx',
      name: 'xxxxx',
      card: undefined,
    },
  },
};
