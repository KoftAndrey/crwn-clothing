import { 
  createContext, 
  useState, 
  useEffect,
 } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
  if (existingCartItem) {
    existingCartItem.quantity = existingCartItem.quantity + 1; 
    return [...cartItems];
  } else {
    return [...cartItems, {...productToAdd, quantity: 1}];
  }
}

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  removeItemFromCart: () => null,
  changeProductQuantity: () => null,
  cartTotal: 0,
});

const CartContextProvider = ({ children }) => {
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartCount, setCartCount ] = useState(0);
  const [ cartTotal, setCartTotal ] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  };

  const removeItemFromCart = (productToRemoveId) => {
    setCartItems(cartItems.filter(item => item.id !== productToRemoveId));
  };

  const changeProductQuantity = (id, type) => {
    const selectedProduct = cartItems.find(item => item.id === id);
    selectedProduct.quantity = type === 'increment' ? selectedProduct.quantity + 1 : selectedProduct.quantity - 1;
    setCartItems([...cartItems]);
    return;
  }

  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    setCartItems, 
    addItemToCart, 
    cartCount, 
    removeItemFromCart, 
    changeProductQuantity,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }