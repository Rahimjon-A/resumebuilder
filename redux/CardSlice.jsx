import { createSlice } from "@reduxjs/toolkit";
const stroreInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};
const CardSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalItems: 0,
    totalAmounts: 0,
    deliveryChange: 10,
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.data.find(
        (item) => item.id == action.payload.id
      );
      if (existingItem) {
        const tempCart = state.data.map((item) => {
          if (item.id == action.payload.id) {
            let newQty = item.quantity + action.payload.quantity;
            let newTotalprice = newQty * item.price;
            console.log(newTotalprice, "sal");
            return {
              ...item,
              quantity: newQty,
              totalPrice: newTotalprice,
            };
          } else {
            return item;
          }
        });
        console.log(state.data);
        state.data = tempCart;
        stroreInLocalStorage(state.data);
      } else {
        state.data.push(action.payload);
        stroreInLocalStorage(state.data);
      }
    },
    removeItem: (state, action) => {
      const tempCart = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      state.data = tempCart;
      stroreInLocalStorage(state.data);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.data.find((item) => item.id == id);
      if (itemToUpdate) {
        const validQuantity = Math.max(quantity || 1, 1);
        itemToUpdate.quantity = validQuantity;
        itemToUpdate.totalPrice = itemToUpdate.price * quantity;
      }
    },
    getCartTotal(state) {
      state.totalAmounts = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.totalItems = state.data.length;
    },
  },
});
export const { addToCart, getCartTotal, removeItem, updateQuantity } =
  CardSlice.actions;
export default CardSlice.reducer;
