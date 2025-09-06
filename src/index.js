import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import './index.css';

// The Main App Shell
import App from './App';

// Import all the new page components
import Intro from './pages/Intro';
import Installation from './pages/Installation';
import Usage from './pages/Usage';
import Variables from './pages/Variables';
import Operators from './pages/Operators';
import ControlFlow from './pages/ControlFlow';
import Functions from './pages/Functions';
import Lexer from './pages/Lexer';
import Parser from './pages/Parser';
import Evaluator from './pages/Evaluator';
import Changelog from './pages/Changelog';
import Discord from './pages/Discord';


// This is the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The App component is the layout for all pages
    children: [
      // The default route is a redirect to the intro page
      { index: true, element: <Navigate to="/docs/intro" replace /> }, 
      {
        path: "docs",
        children: [
          { path: "intro", element: <Intro /> },
          { path: "installation", element: <Installation /> },
          { path: "usage", element: <Usage /> },
          { path: "variables", element: <Variables /> },
          { path: "operators", element: <Operators /> },
          { path: "control-flow", element: <ControlFlow /> },
          { path: "functions", element: <Functions /> },
          { path: "lexer", element: <Lexer /> },
          { path: "parser", element: <Parser /> },
          { path: "evaluator", element: <Evaluator /> },
          { path: "changelog", element: <Changelog /> },
          { path: "discord", element: <Discord /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);