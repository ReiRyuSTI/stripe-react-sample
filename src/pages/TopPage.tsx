import { useNavigate } from 'react-router-dom';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { UserInfoComponent } from '@/components/modules/UserInfoComponent/UserInfoComponent';
import { useAzureAuth } from '@/hooks/useAzureAuth';
import { usePaymentMethodUseCustomerPortal } from '@/hooks/usePaymentMethod';
import { useUserState } from '@/hooks/useUserState';
import { LoadingComponent } from '@/pages/LoadingPage';

export const TopPage = () => {
  const { userId } = useAzureAuth();
  const { user, isLoadingUser } = useUserState(userId);
  const { customerPortalUrl, isLoadingCustomerPortalUrl } = usePaymentMethodUseCustomerPortal(userId);
  const nav = useNavigate();

  const onClickCustomerPortal = () => {
    if (isLoadingCustomerPortalUrl || !customerPortalUrl) return;
    window.location.href = customerPortalUrl;
  };

  if (isLoadingUser || !user) return <LoadingComponent />;
  if (isLoadingCustomerPortalUrl || !customerPortalUrl) return <LoadingComponent />;
  return (
    <main className="flex flex-row items-center justify-center gap-4">
      <UserInfoComponent user={user} />
      <div className="flex w-96 flex-col gap-4">
        <ButtonComponent color="blue" onClick={() => nav('setupIntent')} label="SetupIntentを開く" />
        <ButtonComponent color="blue" onClick={onClickCustomerPortal} label="CustomerPortalを開く" />
      </div>
    </main>
  );
};
