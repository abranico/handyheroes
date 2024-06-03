import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Landing, Login, Register } from './pages'
import NotFound from './routes/NotFound'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
