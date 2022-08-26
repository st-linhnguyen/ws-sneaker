import {BrowserRouter} from 'react-router-dom';
import {Provider} from '@shopify/app-bridge-react';

import appRoutes from './app.routes'
import { RouterOutlet } from './core/custom-router-dom/RouterOutlet';
import Home from './pages/Home';

function App() {
  const config = {
    apiKey: 'f08b10f58ef2245137ca780ad2ee8e25',
    host: 'd3NzbmVha2VyLm15c2hvcGlmeS5jb20vYWRtaW4'
  };

  return (
    <Provider config={ config }>
      {/* <RouterOutlet routes={ appRoutes }/> */}
      <Home />
    </Provider>
  );
}

export default App;
