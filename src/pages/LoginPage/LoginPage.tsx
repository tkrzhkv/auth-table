import { Button } from "@/shared/ui/Button/Button.tsx";
import { useAuthService } from "@/features/auth/model/auth.service.ts";
import { useRouter } from "@tanstack/react-router";
import { Typography } from "@material-tailwind/react";

export const LoginPage = () => {
  const { loginUser, isLoading } = useAuthService();
  const router = useRouter();

  const handleLogin = async () => {
    await loginUser().subscribe({
      next: async () => {
        await router.invalidate();
      },
      error: (err) => console.log("Login failed:", err),
      complete: async () => {
        await router.invalidate();
      },
    });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {!isLoading && (
        <div>
          <Typography variant="h6">Login to continue</Typography>
          <Button
            onClick={handleLogin}
            color="#2662C6"
            title="Please Sign in"
          />
        </div>
      )}
    </div>
  );
};
