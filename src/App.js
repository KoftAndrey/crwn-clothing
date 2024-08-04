
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase';
import { setCurrentUser } from './reducers/user/userActions';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Shop from './routes/shop/Shop';
import Authentication from './routes/authentication/Authentication';
import Contact from './routes/contact/Contact';
import Checkout from './routes/checkout/Checkout';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  

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
