import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import { AuthContextProvider } from "./context/auth.context";
import Protected from "./components/Protected";
import Services from "./pages/services/Services";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
