import { useEffect, useState } from 'react';
import Card from './../components/Card';
function MovieList() {
  const[movies,setMovies] = useState([]);

  useEffect(()=>{
    async function feachMovies() {
      const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b80d59c33d6d57ed9c7e3713f91c188a")  
      const data =  await response.json();
      setMovies(data.results);
    }
    feachMovies();
  },[])
  return (
    <main>
      <section className="max-w-7xl mx-auto my- py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie} />

          )
          )}
        </div>
      </section>
    </main>
  )
}
export default MovieList