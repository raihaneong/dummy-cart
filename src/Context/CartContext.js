import { createContext, useState } from "react";
import { productsArray, getProductData } from "../Constant/productsArray";

export const CartContext = createContext({
  cartItems: [],
  getProductQuantity: () => {},
  addOne: () => {},
  removeOne: () => {},
  removeAll: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function getProductQuantity(id) {
    let itemsQuantity = cartItems.find(
      (items) => items.product.id === id
    )?.quantity;
    if (itemsQuantity == undefined) {
      return 0;
    }
    return itemsQuantity;
  }

  function addOne(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartItems([
        ...cartItems,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: quantity + 1 } : item
        )
      );
    }
  }

  function removeOne(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      removeAll(id);
    } else {
      setCartItems(
        cartItems.map((item) => {
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
        })
      );
    }
    return quantity;
  }

  function removeAll(id) {
    setCartItems(
      cartItems.filter((items) => {
        return items.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartItems.map((item) => {
      const productData = getProductData(item.id);
        totalCost += (productData.price * item.quantity);
    });
    return totalCost;
  }

  const cartContext = {
    cartItems: items,
    getProductQuantity,
    addOne,
    removeOne,
    removeAll,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;