import './App.css';
import { Layout } from '@/components/Layout';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ROUTES } from '@/navigation';
import { AboutPage } from '@/pages/AboutPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <><Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="dashboard"
          element={<ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>} />
        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Route>
    </Routes><header>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header></>
  );
}

export default App;
