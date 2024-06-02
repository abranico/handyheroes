import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Landing, Login } from './pages'
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
