import CART_ACTION_TYPES from './cartActionTypes';
import { createAction } from '../../utils/reducer/reducer';

const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

const removeItemFromCart = (cartItems, productToRemoveId) => {
  const newCartItems = cartItems.filter(item => item.id !== productToRemoveId);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
  if (existingCartItem) {
    existingCartItem.quantity = existingCartItem.quantity + 1; 
    return [...cartItems];
  } else {
    return [...cartItems, {...productToAdd, quantity: 1}];
  }
}

const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};


const changeProductQuantity = (cartItems, id, type) => {
  if (type !=='increment' && type !== 'decrement') return;
  
  const selectedProduct = cartItems.find(item => item.id === id);
  selectedProduct.quantity = type === 'increment' ? selectedProduct.quantity + 1 : selectedProduct.quantity - 1;
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, [...cartItems]);
};



export { 
  setIsCartOpen, 
  removeItemFromCart, 
  addItemToCart, 
  changeProductQuantity 
};
