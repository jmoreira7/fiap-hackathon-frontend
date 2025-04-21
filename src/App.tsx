import "./App.css";
import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { MainContent } from "./pages/MainContent/MainContent";
import { ManageStudents } from "./pages/ManageStudents/ManageStudents.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/students" element={<ManageStudents />} />
      </Routes>
    </>
  );
}

export default App;
