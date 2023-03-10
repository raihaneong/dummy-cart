
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"


export default function ProductsCard({ name, price, description, id }) {
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(id)

    return (
        <div className="pt-40">

        <div className="card w-72 bg-base-100 shadow-xl">
            <figure><img src="" alt={name} /></figure>
            <div className="card-body p-7">
                <h2 className="card-title">{name}</h2>
                <p className="card-subtitle">$ {price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {productQuantity > 0 ?
                        <>
                            <p className="font-bold">In cart: {productQuantity}</p>
                            <button className="btn" onClick={() => cart.addOne(id)}>+</button>
                            <button className="btn" onClick={() => cart.removeOne(id)}>-</button>
                            <button className="btn btn-error" onClick={() => cart.removeAll(id)}>X</button>
                        </>
                        :
                        <button className="btn btn-primary" onClick={() => cart.addOne(id)} >Add to Cart</button>

                    }
                </div>
            </div>
        </div>
                        </div>
    )
}