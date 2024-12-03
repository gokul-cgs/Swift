import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Layout from './container/Layout';
import Dashboard from './components/Dashboard';
import NoPage from './container/NoPage';
import CaseSummary from './components/CaseSummary';
import DynamicDataForm from './components/DynamicDataForm';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="case-summary" element={<CaseSummary />} />
          <Route path="dynamic-data-form" element={<DynamicDataForm />} />
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
