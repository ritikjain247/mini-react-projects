import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from './error-page';
import USHeatmap from './components/USAHeatmap';
import ProgressBars from './components/ProgressBar';
import TempConverter from './components/TempConverter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "usa-heatmap",
        element: <USHeatmap />,
      },
      {
        path: "progress-bars-animation",
        element: <ProgressBars />,
      },
      {
        path: "temparature-converter",
        element: <TempConverter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
