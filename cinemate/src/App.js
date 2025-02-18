import { AllRoutes } from './routes/AllRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ScorolToTop';


function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <AllRoutes />
      <Footer />
    </div>
  );
}
export default App;
