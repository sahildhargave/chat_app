// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import './index.css';
import { client } from './apolloClient'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";

const router = createBrowserRouter([{ path: "/", element: <Home/>}])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
		<RouterProvider router={router}/>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
