import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import PersonDetails from "./pages/PersonDetails";
import PopularPersons from "./pages/PopularPersons";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
        <Route path="/person-details" element={<PersonDetails />} />
        <Route path="/popular-persons" element={<PopularPersons />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
