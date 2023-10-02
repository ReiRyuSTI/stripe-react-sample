import { user } from '@/types/user.type';

type UserInfoComponentProps = {
  user: user;
};

export const UserInfoComponent = (props: UserInfoComponentProps) => {
  const { user } = props;
  return (
    <div>
      <div>
        <span>ユーザー名</span>
        {user.name}
      </div>
      <div>
        <span>メールアドレス</span>
        {user.email}
      </div>
      <div>
        <span>支払情報</span>
        {user.card ? (
          <>
            <div>
              <span>ブランド</span>
              <span>{user.card.brand}</span>
            </div>
            <div>
              <span>last4</span>
              <span>{user.card.last4}</span>
            </div>
            <div>
              <span>有効期限</span>
              <span>
                {user.card.exp_year}/{user.card.exp_month}
              </span>
            </div>
          </>
        ) : (
          <span>支払情報はまだありません。</span>
        )}
      </div>
    </div>
  );
};
