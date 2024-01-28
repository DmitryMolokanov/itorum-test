import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ComicPage from "./pages/ComicPage";
import Favorites from "./pages/Favorites";
import Purchase from "./pages/Purchase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<ComicPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/purcase" element={<Purchase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
