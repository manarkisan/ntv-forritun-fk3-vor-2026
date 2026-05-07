import { SignIn } from '@clerk/clerk-react';

export function LoginPage() {
  return (
    <div className="flex justify-center">
      <SignIn />
    </div>
  );
}