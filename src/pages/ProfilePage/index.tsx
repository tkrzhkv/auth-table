import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "@tanstack/react-router";
import { Button } from "@/shared/ui/Button/Button.tsx";
import { AvatarWithText } from "@/shared/ui/Avatar/Avatar.tsx";

export const ProfilePage = () => {
  const router = useRouter();
  const { logout, user } = useAuth0();

  const { name, email, picture } = user || {};

  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center justify-between w-full max-w-screen-lg p-24">
        <AvatarWithText
          name={name ?? ""}
          email={email ?? ""}
          imageUrl={picture ?? ""}
        />

        <div className="">
          <Button
            onClick={async () => {
              await logout();
              router.invalidate();
            }}
            title="Sign out"
            bg_color="red"
          />
        </div>
      </div>
    </div>
  );
};
