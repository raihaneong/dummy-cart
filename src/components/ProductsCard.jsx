
import { useContext } from "react"
import {CartContext} from "../Context/CartContext"

export default function ProductsCard( {name, price, description, id}) {
    const cart = useContext(CartContext)
    // const productQuantity = cart.getProductQuantity(id)
    console.log(cart.cartItems)

    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure><img src="https://picsum.photos/400/200" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-subtitle">$ {price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => cart.addOne(id)} >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}