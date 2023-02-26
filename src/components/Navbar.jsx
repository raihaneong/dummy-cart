import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import ItemInCart from "./ItemInCart"



export default function Navbar() {
    const cart = useContext(CartContext)
    const itemInCart = cart.cartItems.reduce((sum, item) => sum + item.quantity, 0)
    console.log(cart.cartItems)

    const checkout = async () => {
        await fetch('http://dummy-cart-api/checkout', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ items: cart.cartItems })
        }).then((response) => {
            return response.json()
        }).then((data) => {
            if (data.url) {
                window.location.assign(data.url)
            }
        })
    }

    return (
        <>
            <div className="navbar bg-base-100 p-8 drop-shadow-lg hover:drop-shadow-2xl duration-700">
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost normal-case text-2xl">rhntp store</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{itemInCart}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{itemInCart} Items</span>
                                <span className="text-info">Subtotal: ${cart.getTotalCost().toFixed(2)}</span>
                                <div className="card-actions">
                                    <label htmlFor="my-modal-3" className="btn">View cart</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-600 hover:bg-red-900">✕</label>
                    <h3 className="text-lg font-bold">Your Cart</h3>
                    {itemInCart > 0 ?
                        <>
                            {cart.cartItems.map((item, index) => (
                                <ItemInCart key={index} id={item.id} quantity={item.quantity} price={item.price} />

                            ))}
                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            <button className="btn btn-success text-slate-100 mt-4" onClick={checkout}>Checkout</button>
                        </>

                        :
                        <>
                            <p className="py-4 mt-4">Nothing's here</p>
                        </>

                    }
                </div>
            </div>

        </>
    )
}