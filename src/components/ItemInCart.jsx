
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { getProductData } from "../Constant/productsArray";

function ItemInCart(props) {
    const cart = useContext(CartContext)
    const productData = getProductData(props.id)

    return (
        <>
            <h1 className="font-bold">{productData.name}</h1>
            <p>amount: {props.quantity}</p>
            <span className="flex justify-between p-4">
            <p>$ {(props.quantity * productData.price).toFixed(2)} </p>
            <button className="btn btn-error" onClick={() => cart.removeAll(props.id)}>Remove</button>
            </span>
                
            <hr />
        </>
    )
}

export default ItemInCart;