import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import UsPage from './pages/UsPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={`${import.meta.env.VITE_BASE_URL}`} element={<HomePage/>} />
        <Route exact path={`${import.meta.env.VITE_BASE_URL}us`} element={<UsPage/>} />
        <Route exact path={`${import.meta.env.VITE_BASE_URL}service/:id`} element={<ServicePage/>} />
        <Route exact path={`${import.meta.env.VITE_BASE_URL}contact`} element={<ContactPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
