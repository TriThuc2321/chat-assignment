import { useRoutes } from 'react-router-dom';
import { ROUTES } from './configs/route';

function App() {
  const routes = useRoutes(ROUTES);

  return <>{routes}</>;
}

export default App;
