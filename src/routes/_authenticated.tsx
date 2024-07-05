import { createFileRoute, redirect } from "@tanstack/react-router";
import { RoutesPaths } from "@/shared/constants/routePaths.ts";
import { ProfilePage } from "@/pages/ProfilePage";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({ to: "/login" });
    }
  },
});
