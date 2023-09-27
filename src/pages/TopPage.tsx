import { useAzureAuth } from '@/hooks/useAzureAuth';

export const TopPage = () => {
  const { userId, authenticationResult, logoutAzure } = useAzureAuth();

  const logout = async () => {
    await logoutAzure();
  };

  const test = async () => {
    const result = await authenticationResult();
    console.log(result);
  };

  return (
    <main>
      {userId} <button onClick={logout}>logout</button>
      <button onClick={test}>result</button>
    </main>
  );
};
