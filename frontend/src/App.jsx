import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Services, Landing, Login, Register, Profile } from "./pages";
import NotFound from "./routes/NotFound";
import { AuthenticationContextProvider } from "./context/authentication/authentication.context";
import Protected from "./routes/Protected";
import { ReviewsContextProvider } from "./context/reviews/reviews.context";

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
        <ReviewsContextProvider>
          <RouterProvider router={router} />
        </ReviewsContextProvider>
      </AuthenticationContextProvider>
    </>
  );
}

export default App;
