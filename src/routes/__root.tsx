import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { Auth0ContextInterface } from "@auth0/auth0-react";

interface IRouterContext {
  auth: Auth0ContextInterface;
}

export const Route = createRootRouteWithContext<IRouterContext>()({
  component: () => <Outlet />,
});
