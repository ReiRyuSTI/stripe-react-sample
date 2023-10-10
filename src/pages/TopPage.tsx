import { useNavigate } from 'react-router-dom';

import { createCheckoutSession, fetchSetupPaymentMethodCheckoutSession } from '@/api/checkoutSession';
import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { ProductComponent } from '@/components/modules/ProductComponent/ProductComponent';
import { UserInfoComponent } from '@/components/modules/UserInfoComponent/UserInfoComponent';
import { useAzureAuth } from '@/hooks/useAzureAuth';
import { useCustomerPortalSession } from '@/hooks/useCustomerPortal';
import { useProducts } from '@/hooks/useProducts';
import { useUserState } from '@/hooks/useUserState';
import { LoadingComponent } from '@/pages/LoadingPage';

export const TopPage = () => {
  const { userId } = useAzureAuth();
  const { user, isLoadingUser } = useUserState(userId);
  const { fetchPaymentCustomerPortal, fetchShippingCustomerPortal } = useCustomerPortalSession();
  const { products, isLoadingProducts } = useProducts();

  const nav = useNavigate();

  const onClickPaymentCustomerPortal = async () => {
    const res = await fetchPaymentCustomerPortal(userId);
    window.location.href = res;
  };

  const onClickShippingCustomerPortal = async () => {
    const res = await fetchShippingCustomerPortal(userId);
    window.location.href = res;
  };

  const onClickPaymentSetupUseCheckoutSession = async () => {
    const res = await fetchSetupPaymentMethodCheckoutSession(userId);
    window.location.href = res;
  };

  const onClickPaymentCheckoutSession = async (priceID: string) => {
    const res = await createCheckoutSession(userId, priceID);
    window.location.href = res;
  };

  if (isLoadingUser || !user) return <LoadingComponent />;
  if (isLoadingProducts || !products) return <LoadingComponent />;

  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-row items-center justify-between gap-4">
        <UserInfoComponent user={user} />
        <div className="flex w-96 flex-col gap-4">
          <ButtonComponent color="blue" onClick={() => nav('setupIntent')} label="SetupIntentを開く" />
          <ButtonComponent color="blue" onClick={() => nav('edit')} label="配送先住所の設定を変更" />
          <ButtonComponent color="blue" onClick={onClickPaymentCustomerPortal} label="Payment CustomerPortalを開く" />
          <ButtonComponent color="blue" onClick={onClickShippingCustomerPortal} label="Shipping CustomerPortalを開く" />
          <ButtonComponent
            color="blue"
            onClick={onClickPaymentSetupUseCheckoutSession}
            label="Payment Checkout Session"
          />
        </div>
      </div>
      <div className="flex flex-row">
        {products.map((product) => (
          <ProductComponent key={product.id} product={product} onClick={onClickPaymentCheckoutSession} />
        ))}
      </div>
    </main>
  );
};
