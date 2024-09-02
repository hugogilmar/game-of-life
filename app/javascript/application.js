// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import BoardList from './components/BoardList';
import Board from './components/Board';

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createHashRouter([
  {
    path: "/",
    element: <BoardList />,
  },
  {
    path: "/boards/:boardId",
    element: <Board />,
  }
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
