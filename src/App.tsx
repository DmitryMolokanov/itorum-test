import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ComicPage from "./pages/ComicPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<ComicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
