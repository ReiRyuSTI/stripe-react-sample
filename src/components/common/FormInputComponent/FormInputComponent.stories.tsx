import { useForm } from 'react-hook-form';

import { FormInputComponent } from './FormInputComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/FormInputComponent',
  component: FormInputComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormInputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    name: 'name',
    label: 'ユーザー名',
  },
  render: function Comp({ ...args }) {
    // 関数コンポーネントを定義
    const { control } = useForm<{ name: string }>({
      defaultValues: {
        name: '1',
      },
    });
    return <meta.component {...args} control={control} name="name" rules={{}}></meta.component>;
  },
};

export const Disable: Story = {
  args: {
    name: 'name',
    label: 'ユーザー名',
    disable: true,
  },
  render: function Comp({ ...args }) {
    // 関数コンポーネントを定義
    const { control } = useForm<{ name: string }>({
      defaultValues: {
        name: '1',
      },
    });
    return (
      <meta.component
        {...args}
        control={control}
        name="name"
        rules={{ required: { value: true, message: '値は入れる必要があります' } }}
      ></meta.component>
    );
  },
};
