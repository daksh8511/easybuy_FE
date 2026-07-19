import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import type { ReactNode } from 'react'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

const AuthRoute = ({ children }: { children: ReactNode }) => {
  return localStorage.getItem('token') ? <Navigate to="/" replace /> : <>{children}</>
}

const Routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/signup', element: <AuthRoute><Signup /></AuthRoute> },
  { path: '/login', element: <AuthRoute><Login /></AuthRoute> },
])

const App = () => {
  return <RouterProvider router={Routes} />
}

export default App;