import { createRouter, RouterProvider } from "@tanstack/react-router";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider } from "@material-tailwind/react";
import { routeTree } from "@/routeTree.gen.ts";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const DOMAIN = import.meta.env.VITE_DOMAIN;

const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
});

function InnerApp() {
  const auth = useAuth0();

  return (
    <ThemeProvider>
      <RouterProvider router={router} context={{ auth }} />
    </ThemeProvider>
  );
}

function App() {
  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <InnerApp />
    </Auth0Provider>
  );
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default App;
