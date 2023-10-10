import { ProductComponent } from './ProductComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/ProductComponent',
  component: ProductComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProductComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    product: {
      id: 'xxx',
      images: [],
      name: 'xxxx',
      price: {
        currency: 'jpy',
        id: 'xxx',
        unit_amount: 299,
        unit_amount_decimal: 'xxxxx',
      },
    },
  },
};
