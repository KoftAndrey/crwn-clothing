import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Shop from './routes/shop/Shop';
import Authentication from './routes/authentication/Authentication';
import Contact from './routes/contact/Contact';
import Checkout from './routes/checkout/Checkout';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="contact" element={<Contact />} />
        <Route path="checkout" element={<Checkout />} />
      </Route> 
    </Routes>
  )
}

export default App;
