import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/shared/ui/Button/Button.tsx";

export const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h2>Login</h2>
      <Button
        onClick={async () => {
          await loginWithRedirect();
        }}
        bg_color="blue"
        title="Please Sign in"
      />
    </div>
  );
};
