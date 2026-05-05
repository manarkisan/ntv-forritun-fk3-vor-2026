import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route
              path="login"
              element={
                // <ProtectedRoute>
                  <LoginPage />
                // </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

// function App() {
//   const [page, setPage] = useState<AppPage>('home');

//   return (
//     <Layout activePage={page} onNavigate={setPage}>
//       {page === 'home' ? <HomePage /> : <AboutPage />}
//     </Layout>
//   );
// }
