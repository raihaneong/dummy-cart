import { createContext, useState } from "react";
import { productsArray } from "../Constant/productsArray";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOne: () => {},
    removeOne: () => {},
    removeAll: () => {},
    getTotalCost: () => {},
})
