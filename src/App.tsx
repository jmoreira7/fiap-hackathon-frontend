import "./App.css";
import { Header } from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainContent } from "./pages/MainContent/MainContent";
import { ManageStudents } from './pages/ManageStudents/ManageStudents.tsx'

const router = createBrowserRouter([
  { path: '/', element: <MainContent /> },
  { path: '/students', element: <ManageStudents /> },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
