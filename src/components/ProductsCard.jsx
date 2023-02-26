
import { useContext } from "react"
import {CartContext} from "../Context/CartContext"

export default function ProductsCard(props) {
    const products = props.products
    const cart = useContext(CartContext)
    // const productQuantity = cart.getProductQuantity(id)
    console.log(cart.cartItems)

    return (
        <div className="card w-96 bg-base-100 shadow-xl p-8">
            <figure><img src="https://picsum.photos/400/200" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{products.name}</h2>
                <p className="card-subtitle">$ {products.price}</p>
                <p>{products.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => cart.addOne(products.id)} >Add to Cart</button>
                    <p>{products.id}</p>
                </div>
            </div>
        </div>
    )
}