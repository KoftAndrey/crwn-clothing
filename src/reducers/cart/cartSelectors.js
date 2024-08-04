import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems,
);

const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen,
);

const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0),
);

const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0),
);

export { 
  selectCartItems,
  selectIsCartOpen,
  selectCartCount,
  selectCartTotal,
};
