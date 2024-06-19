import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Services, Landing, Login, Register, Profile } from "./pages";
import NotFound from "./routes/NotFound";
import { AuthenticationContextProvider } from "./context/authentication/authentication.context";
import Protected from "./routes/Protected";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/services",
      element: (
        <Protected>
          <Services />
        </Protected>
      ),
    },
    {
      path: "/profile",
      element: (
        <Protected>
          <Profile />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <AuthenticationContextProvider>
        <RouterProvider router={router} />
      </AuthenticationContextProvider>
    </>
  );
}

export default App;