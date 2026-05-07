import { useNavigate } from "react-router";
 
import { fakeAuth } from "@/components/fakeAuth";

export default function SecretPage() {
    
    const navigate= useNavigate();
    const handleLogout = () => {
        fakeAuth.logout(() => {
            navigate("/login")
        })
    }

  return (
    <>
      <div>
        <p>This is a secret page ;D</p>
      </div>
      <button onClick={handleLogout}>Skrá út</button>
    </>
  );
}
