import pagenotefound from '../assets/images/erik-mclean-Rg-fYTQ5Rgw-unsplash.jpg';
function PagesNotFound() {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404,Oops!</p>
          <img src={pagenotefound} className="m-2  h-96 w-96 object-cover" alt="Cinemate Logo" />
        </div>
        <div className="">
        </div>
      </section>
    </main>
  )
}

export default PagesNotFound