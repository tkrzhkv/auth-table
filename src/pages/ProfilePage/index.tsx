import { useRouter } from "@tanstack/react-router";
import { Button } from "@/shared/ui/Button/Button.tsx";
import { useAuthService } from "@/features/auth/model/auth.service.ts";
import { useRecoilState } from "recoil";
import { userStateAtom } from "@/entities/user/model/auth-state.ts";
import { useEffect } from "react";
import { UserCard } from "@/shared/ui/UserCard";
import { Spinner } from "@material-tailwind/react";
import { ProfileTable } from "@/features/profile-table/ui/ProfileTable";

export const ProfilePage = () => {
  const router = useRouter();
  const { user, logoutUser } = useAuthService();
  const [currentUser, setCurrentUser] = useRecoilState(userStateAtom);

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, [user, setCurrentUser]);

  const handleLogout = async () => {
    logoutUser().subscribe({
      next: async () => {
        await setCurrentUser(null);
        await router.invalidate();
      },
      error: (err) => console.error("Logout failed:", err),
    });
  };

  const { name, email } = currentUser || {};

  return (
    <div className="w-full flex justify-center">
      {currentUser ? (
        <div className="w-full px-20">
          <div className="flex items-center justify-between w-full max-w-screen-lg p-24">
            <UserCard name={name ?? ""} email={email ?? ""} />
            <Button onClick={handleLogout} title="Sign out" color="#DC5D45" />
          </div>
          <ProfileTable />
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};
