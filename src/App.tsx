import { BrowserRouter } from 'react-router-dom';

import { RouterConfig } from '@/routers/RouterConfig';
import { AzureConfigComponent } from '@/utilities/AzureConfigComponent';

function App() {
  return (
    <AzureConfigComponent>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </AzureConfigComponent>
  );
}

export default App;
