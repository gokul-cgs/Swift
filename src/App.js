import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Layout from './container/Layout';
import NoPage from './container/NoPage';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {ProtectedRoutes.map(({ route, component: Component }, index) => (
            <Route key={index} path={route} element={<Component />} />
          ))}
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
