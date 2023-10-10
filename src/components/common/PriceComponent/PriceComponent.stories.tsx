import { PriceComponent } from './PriceComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/PriceComponent',
  component: PriceComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PriceComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    price: {
      currency: 'jpy',
      id: 'xxxxx',
      unit_amount: 2000,
      unit_amount_decimal: '2000',
    },
  },
};
