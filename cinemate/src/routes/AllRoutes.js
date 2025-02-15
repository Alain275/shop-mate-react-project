import { Routes,Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import MovieList from "../pages/MovieList";
import Seach from "../pages/Seach";
import PagesNotFound from "../pages/PagesNotFound";

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList/>}/>
            <Route path="movie/:id" element={<MovieDetail/>}/>
            <Route path="movies/popular" element={<MovieList/>}/>
            <Route path="movies/top" element={<MovieList/>}/>
            <Route path="movies/upcoming" element={<MovieList/>}/>
            <Route path="search" element={<Seach/>}/>
            <Route path="*" element={<PagesNotFound/>}/>
        </Routes>
    </>
  )
}
