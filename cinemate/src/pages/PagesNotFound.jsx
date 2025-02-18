import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/Button';
import pagenotefound from '../assets/images/erik-mclean-Rg-fYTQ5Rgw-unsplash.jpg';

function PagesNotFound() {
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`;
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404,Oops!</p>
          <img src={pagenotefound} className="m-2  h-96 w-96 object-cover rounded" alt="Cinemate Logo" />
        </div>
        <div className="flex justify-center my-8">
          <Link to="/">
           <Button prop='Back to Home Page'/>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PagesNotFound