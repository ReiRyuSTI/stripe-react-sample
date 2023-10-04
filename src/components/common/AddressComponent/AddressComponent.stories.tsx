import { AddressComponent } from './AddressComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/AddressComponent',
  component: AddressComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddressComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    shipping: {
      address: {
        city: 'test',
        country: 'JP',
        line1: 'test',
        line2: '',
        postal_code: '2212211',
        state: '青森県',
      },
      name: 'テスト',
      phone: null,
    },
  },
};
