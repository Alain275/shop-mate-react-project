import useFetch from '../hooks/useFetch';
import Card from './../components/Card';
import { useTitle } from '../hooks/useTitle';
function MovieList({apiPath,title}) {
  const{data:movies}=useFetch(apiPath)
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto my- py-7">
        <div className="flex justify-start flex-wrap others:justify-evenly">
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