import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UsPage from './pages/UsPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/us" element={<UsPage/>} />
        <Route exact path="/service/:id" element={<ServicePage/>} />
        <Route exact path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
