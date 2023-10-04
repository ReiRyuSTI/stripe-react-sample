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
      name: 'test',
      email: 'ry-tanaka@sios.com',
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
  },
};
export const CardNonData: Story = {
  args: {
    user: {
      email: 'xxx',
      name: 'xxxxx',
      card: undefined,
      shipping: undefined,
    },
  },
};
