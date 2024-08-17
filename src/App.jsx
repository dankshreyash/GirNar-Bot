
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import DroneCenter from './Components/DroneCenter';
import DroneServices from './Components/DroneServices';
import Explore from './Components/Explore';
import Fly from './Components/Fly';
import Navbar from './Components/Navbar';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/dronecenter",
      element: <DroneCenter />

    },
    {
      path: "/droneservices",
      element: <DroneServices />

    },
    {
      path: "/explore",
      element: <Explore />

    },
    {
      path: "/fly",
      element: <Fly />

    }
  ])

  return (
    <>
      <RouterProvider router={router} >

        <Navbar />
      </RouterProvider >
    </>
  )
}

export default App
