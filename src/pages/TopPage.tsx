import { useNavigate } from 'react-router-dom';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { UserInfoComponent } from '@/components/modules/UserInfoComponent/UserInfoComponent';
import { useAzureAuth } from '@/hooks/useAzureAuth';
import { useCustomerPortalSession } from '@/hooks/useCustomerPortal';
import { useUserState } from '@/hooks/useUserState';
import { LoadingComponent } from '@/pages/LoadingPage';

export const TopPage = () => {
  const { userId } = useAzureAuth();
  const { user, isLoadingUser } = useUserState(userId);
  const { fetchPaymentCustomerPortal, fetchShippingCustomerPortal } = useCustomerPortalSession();
  const nav = useNavigate();

  const onClickPaymentCustomerPortal = async () => {
    const res = await fetchPaymentCustomerPortal(userId);
    window.location.href = res;
  };

  const onClickShippingCustomerPortal = async () => {
    const res = await fetchShippingCustomerPortal(userId);
    window.location.href = res;
  };

  if (isLoadingUser || !user) return <LoadingComponent />;
  return (
    <main className="flex flex-row items-center justify-center gap-4">
      <UserInfoComponent user={user} />
      <div className="flex w-96 flex-col gap-4">
        <ButtonComponent color="blue" onClick={() => nav('setupIntent')} label="SetupIntentを開く" />
        <ButtonComponent color="blue" onClick={() => nav('edit')} label="配送先住所の設定を変更" />
        <ButtonComponent color="blue" onClick={onClickPaymentCustomerPortal} label="Payment CustomerPortalを開く" />
        <ButtonComponent color="blue" onClick={onClickShippingCustomerPortal} label="Shipping CustomerPortalを開く" />
      </div>
    </main>
  );
};
