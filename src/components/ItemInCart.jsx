
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { getProductData } from "../Constant/productsArray";

function ItemInCart(props) {
    const cart = useContext(CartContext)
    const productData = getProductData(id)

    return (
        <>
            <h1>{productData.title}</h1>
            <p>{props.quantity}</p>
            <p>$ {(props.quantity * productData.price).toFixed(2)} </p>
            <button className="btn btn-error" onClick={() => cart.removeAll(id)}>Remove</button>
            <hr />
        </>
    )
}

export default ItemInCart;