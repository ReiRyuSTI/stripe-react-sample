import { AddressComponent } from '@/components/common/AddressComponent/AddressComponent';
import { CardComponent } from '@/components/common/CardComponent/CardComponent';
import { InfoContentComponent } from '@/components/common/InfoContentComponent/InfoContentComponent';
import { UserType } from '@/types/user.type';

type UserInfoComponentProps = {
  user: UserType;
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
          <CardComponent card={user.card} />
        ) : (
          <div className="flex w-full items-center justify-center rounded-md border border-red-400 p-2">
            <span className=" text-xs text-red-400">支払情報はまだありません。</span>
          </div>
        )}
      </div>
      <div className="flex w-full flex-col ">
        <span className="text-sm">配送先情報</span>
        {user.shipping ? (
          <AddressComponent shipping={user.shipping} />
        ) : (
          <div className="flex w-full items-center justify-center rounded-md border border-red-400 p-2">
            <span className=" text-xs text-red-400">支払情報はまだありません。</span>
          </div>
        )}
      </div>
    </div>
  );
};
