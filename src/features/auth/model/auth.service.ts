import { from, Observable } from "rxjs";
import { useAuth0 } from "@auth0/auth0-react";

interface AuthService {
  user:
    | {
        name?: string;
        email?: string;
        picture?: string;
      }
    | undefined;
  logoutUser: () => Observable<void>;
  loginUser: () => Observable<void>;
  isAuthenticated?: boolean;
  isLoading?: boolean;
}

export const useAuthService = (): AuthService => {
  const { logout, user, loginWithRedirect, isLoading } = useAuth0();

  const logoutUser = () => from(logout());
  const loginUser = () => from(loginWithRedirect());

  return {
    user,
    logoutUser,
    loginUser,
    isLoading,
  };
};
