import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from '@/components/Layout';
import { IndexPage } from './pages/IndexPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
    </Routes>
  );
}

export default App;



// www.themealdb.com/api/json/v1/1/random.php