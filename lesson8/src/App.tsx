import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from '@/components/Layout';
import { ProductsPage } from '@/pages/ProductsPage';
import { CartPage } from '@/pages/CartPage';
import { AppStore } from './shared/components/ui/store/appStore';

function App() {
  return (
    <AppStore>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </AppStore>
  );
}

export default App;