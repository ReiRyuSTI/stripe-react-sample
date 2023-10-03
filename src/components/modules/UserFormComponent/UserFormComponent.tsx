import { SubmitHandler, useForm } from 'react-hook-form';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { FormInputComponent } from '@/components/common/FormInputComponent/FormInputComponent';
import { API_RequestUser } from '@/types/user.type';

type UserFormComponentProps = {
  user: API_RequestUser;
  submitData: (user: API_RequestUser) => Promise<void>;
};

export const UserFormComponent = (props: UserFormComponentProps) => {
  const { user, submitData } = props;
  const { control, handleSubmit } = useForm<API_RequestUser>({
    defaultValues: {
      ...user,
    },
  });
  const onSubmit: SubmitHandler<API_RequestUser> = async (data: API_RequestUser) => {
    console.log(data);

    await submitData(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-96 flex-col p-2">
        <FormInputComponent name={'email'} label="メールアドレス" control={control} disable={true} />
        <FormInputComponent
          name={'name'}
          label="ユーザー名"
          control={control}
          rules={{ required: { value: true, message: '絶対に入力してね' } }}
        />
        <ButtonComponent label="送信" color="blue" />
      </form>
    </>
  );
};
