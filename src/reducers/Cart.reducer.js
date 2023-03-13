let newCarts = [];
const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      newCarts = [...state.carts, action.user_Id];
      localStorage.setItem('carts', JSON.stringify(newCarts));

      return { ...state, carts: newCarts };

    case 'REMOVE_FROM_CART':
      newCarts = state.carts.filter((item) => item !== action.user_Id);
      localStorage.setItem('carts', JSON.stringify(newCarts));
      return {
        ...state,
        carts: newCarts,
      };
    default:
      return { ...state };
  }
};
export default CartReducer;
