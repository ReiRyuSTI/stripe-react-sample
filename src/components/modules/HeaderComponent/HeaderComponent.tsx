import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { useAzureAuth } from '@/hooks/useAzureAuth';

export const HeaderComponent = () => {
  const { logoutAzure } = useAzureAuth();
  return (
    <header className="h-16 w-full bg-red-200">
      headerだよ <ButtonComponent label="logout" color="red" onClick={logoutAzure} />
    </header>
  );
};
