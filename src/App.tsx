import { AppLayout } from '@/components/layout/AppLayout';
import { RouterConfig } from '@/routers/RouterConfig';
import { AzureConfigComponent } from '@/utilities/AzureConfigComponent';

function App() {
  return (
    <AzureConfigComponent>
      <AppLayout>
        <RouterConfig />
      </AppLayout>
    </AzureConfigComponent>
  );
}

export default App;
