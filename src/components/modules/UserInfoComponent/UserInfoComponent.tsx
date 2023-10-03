import { InfoContentComponent } from '@/components/common/InfoContentComponent/InfoContentComponent';
import { user } from '@/types/user.type';

type UserInfoComponentProps = {
  user: user;
};

export const UserInfoComponent = (props: UserInfoComponentProps) => {
  const { user } = props;
  return (
    <div className="flex w-96 flex-col gap-2 p-2">
      <InfoContentComponent label={'ユーザー名'} content={user.name} />
      <InfoContentComponent label={'メールアドレス'} content={user.email} />
      <div className="flex w-full flex-col ">
        <span className="text-sm">支払情報</span>
        {user.card ? (
          <div className="flex flex-col rounded-md border border-gray-200 p-2 text-sm ">
            <div className="flex items-center justify-center">
              <span className="rounded-md bg-gray-300 py-1 px-4">{user.card.brand}</span>
            </div>
            <div className="flex flex-row justify-around">
              <span>{user.card.last4}</span>
              <span>
                {user.card.exp_year}/{user.card.exp_month}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex w-full items-center justify-center rounded-md border border-red-400 p-2">
            <span className=" text-xs text-red-400">支払情報はまだありません。</span>
          </div>
        )}
      </div>
    </div>
  );
};
