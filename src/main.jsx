import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Work from './pages/Work'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import WorkCareLover from './pages/WorkCareLover'
import WorkAgilease from './pages/WorkAgilease'
import WorkNami from './pages/WorkNami'
import WorkBikcraft from './pages/WorkBikcraft'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: 'https://viniciushere.github.io/portfolioBrenoNeves/',
    element: <Home/>,
  },
  {
    path: '/portfolioBrenoNeves/Work',
    element: <Work/>,
  },
  {
    path: '/AboutMe',
    element: <AboutMe/>,
  },
  {
    path: '/Contact',
    element: <Contact/>,
  },
  {
    path: '/WorkCareLover',
    element: <WorkCareLover/>,
  },
  {
    path: '/WorkAgilease',
    element: <WorkAgilease/>,
  },
  {
    path: '/WorkBikcraft',
    element: <WorkBikcraft/>,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </StrictMode>
)

