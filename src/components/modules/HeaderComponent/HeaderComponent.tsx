import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { useAzureAuth } from '@/hooks/useAzureAuth';

export const HeaderComponent = () => {
  const { logoutAzure } = useAzureAuth();
  return (
    <header className="flex h-16 w-full flex-row items-center justify-between px-2">
      <span className="font-kiwi text-xl ">Stripe 素振り環境</span>
      <div className="">
        <ButtonComponent label="AADB2CからLogoutする" color="red-border" onClick={logoutAzure} />
      </div>
    </header>
  );
};
