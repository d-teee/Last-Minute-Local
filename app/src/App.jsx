import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx';
import CustomerPage from './pages/CustomerPage.jsx';
import RetailerPage from './pages/RetailerPage.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RetailerPage />} />
        <Route path="/shoppers" element={<CustomerPage />} />
      </Routes>
    </>
  );
}
