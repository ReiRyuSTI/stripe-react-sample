import { CardComponent } from './CardComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/CardComponent',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    card: {
      brand: 'visa',
      checks: {
        address_line1_check: null,
        address_postal_code_check: null,
        cvc_check: 'pass',
      },
      country: 'US',
      exp_month: 3,
      exp_year: 2024,
      fingerprint: 'Bn7CYG9RtgEYDIlF',
      funding: 'credit',
      last4: '4242',
      networks: {
        available: ['visa'],
        preferred: null,
      },
      three_d_secure_usage: {
        supported: true,
      },
      wallet: null,
    },
  },
};
