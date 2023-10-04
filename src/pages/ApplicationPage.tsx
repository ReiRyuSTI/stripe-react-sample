import { UserFormComponent } from '@/components/modules/UserFormComponent/UserFormComponent';
import { useAzureAuth } from '@/hooks/useAzureAuth';
import { uesUserFunction, useUserState } from '@/hooks/useUserState';
import { API_RequestUser } from '@/types/user.type';

export const ApplicationPage = () => {
  const { userCreate } = uesUserFunction();
  const { userId, userEmail } = useAzureAuth();
  const { mutateUser } = useUserState(userId);
  const submitData = async (user: API_RequestUser) => {
    await userCreate(user);
    mutateUser();
  };

  return (
    <main className="flex flex-row items-center justify-center gap-4">
      <UserFormComponent user={{ uuid: userId, email: userEmail, name: '' }} submitData={submitData} />
    </main>
  );
};
