import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
