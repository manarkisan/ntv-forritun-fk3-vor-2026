import { Navigate, Outlet, useNavigate } from "react-router";
import { fakeAuth } from "./fakeAuth";

export default function ProtectedRoute() {
    const { isAuthenticated } = fakeAuth;
   
    
    if (!isAuthenticated) return <Navigate to="/login" replace />
    return <Outlet />
}