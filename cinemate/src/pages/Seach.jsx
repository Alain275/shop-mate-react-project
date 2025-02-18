import useFetch from '../hooks/useFetch';
import Card from '../components/Card';
import { useTitle } from '../hooks/useTitle';
import { useSearchParams } from 'react-router-dom';

function Seach({apiPath}) {
  const [searchParams]=useSearchParams();
  const queryTerm = searchParams.get("q");

  const{data:movies}=useFetch(apiPath,queryTerm)
  useTitle(`Search result for ${queryTerm}`);
  return (
    <main>
      <section className="py-3">
        <p className="text-3xl text-gray-700 dark:text-white"> {movies.length === 0 ? `no result found for '${queryTerm}'`: `result for '${queryTerm}'` } </p>
      </section>
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

export default Seach