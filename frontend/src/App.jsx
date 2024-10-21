import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Services,
  Landing,
  Login,
  Register,
  Profile,
  Dashboard,
} from "./pages";
import NotFound from "./routes/NotFound";
import { AuthenticationContextProvider } from "./context/authentication/authentication.context";
import Protected from "./routes/Protected";
import { ReviewsContextProvider } from "./context/reviews/reviews.context";
import { UsersContextProvider } from "./context/users/users.context";
import { ServicesContextProvider } from "./context/services/services.context";

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
      path: "/dashboard",
      element: (
        <Protected type="admin">
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "/user/:username",
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
        <UsersContextProvider>
          <ServicesContextProvider>
            <ReviewsContextProvider>
              <RouterProvider router={router} />
            </ReviewsContextProvider>
          </ServicesContextProvider>
        </UsersContextProvider>
      </AuthenticationContextProvider>
    </>
  );
}

export default App;
