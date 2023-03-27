const initialState = {
  cartList: [],
};

const updateCart = (state, roomData) => {
  const isRoomAlreadyExists = state.cartList.filter(
    (e) => e._id === roomData._id
  );
  if (isRoomAlreadyExists.length !== 0) {
    return state.cartList;
  }
  return [roomData, ...state.cartList];
};

const removeCartItem = (cartList, itemId) => {
  return cartList.filter((obj) => obj._id !== itemId);
};

const reducer = (state = initialState, action) => {
  let updatedState = state;
  let { cartList } = updatedState;
  const { type, roomData, itemId } = action;
  switch (type) {
    case "addRoom":
      cartList = updateCart(state, roomData);
      break;
    case "removeOrderItem":
      cartList = removeCartItem(state.cartList, itemId);
      break;
    case "clearCart":
      cartList = [];
      break;

    default:
      break;
  }
  //   console.log({ ...updatedState, cartList });
  return { ...updatedState, cartList };
};

export default reducer;
