import { Routes,Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import MovieList from "../pages/MovieList";
import Seach from "../pages/Seach";
import PagesNotFound from "../pages/PagesNotFound";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing"/>}/>
            <Route path="movie/:id" element={<MovieDetail/>}/>
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular"/>}/>
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"/>}/>
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>}/>
            <Route path="search" element={<Seach  apiPath="search/movie"/>}/>
            <Route path="*" element={<PagesNotFound />}/>
        </Routes>      
    </div>
  )
}
