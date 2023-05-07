import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Carts from './pages/Carts'
import Checkout from './pages/Checkout';
import Pending from './pages/Pending/index';
import Single from './pages/single';
import Error from './components/Error';
import { Route, Routes } from 'react-router-dom';

const App = () => {



  return (
    <>
      <Header />
      <main>

        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/:id' element={<Single />} />
          <Route path='/cart' element={<Carts />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/pending' element={<Pending />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;