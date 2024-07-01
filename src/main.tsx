import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardPage from './routes/dashboard.tsx'
import { Provider } from 'react-redux'
import {store} from './app/store.ts'
import LoginPage from './routes/login.tsx'
import ErrorPage from './routes/error-page.tsx'

const router = createBrowserRouter([
  {
    errorElement:<ErrorPage/>,
    children :[  
      {path: "/vite-react-ts-vitest",
    element: <Root/>,
    children:[
      {
        path:"/vite-react-ts-vitest/devicelist",
        element:<DashboardPage/>
      },
      {
        path:"/vite-react-ts-vitest/teams",
        element:<h1> Teams Page</h1>
      },
      {
        path:"/vite-react-ts-vitest/projects",
        element:<p> Projects Page</p>
      },
      {
        path:"/vite-react-ts-vitest/calendar",
        element:<p> Calendar Page</p>
      }
    ]
  }
  ]
  },
  {
    path:"/vite-react-ts-vitest/form",
    element:<LoginPage/>,
    errorElement:<ErrorPage/>
  }
]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>,
)
