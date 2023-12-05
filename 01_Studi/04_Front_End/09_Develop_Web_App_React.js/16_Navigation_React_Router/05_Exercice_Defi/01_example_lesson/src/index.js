import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import ErrorPage from './Routes/ErrorPage.js'
import Contact from './Routes/Contact.js'
import About from './Routes/About.js'
import reportWebVitals from './reportWebVitals.js'
import {
  createBrowserRouter,
  RouterProvider
  /*createRoutesFromElements,
  Route*/
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  },

  /*createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />} />
  )*/
  /*[
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: 'contact',
      element: <Contact />
    }
  ]*/
  {
    path: 'about',
    element: <About />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()
