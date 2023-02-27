import { productsArray } from "../Constant/productsArray"
import ProductsCard from "../components/ProductsCard"

console.log(productsArray.map((product) => product))

export default function Store() {

    const ProductsCardElement = productsArray.map((product) => (
        <ProductsCard key={product.id} name={product.name} price={product.price} description={product.description} id={product.id} />
    ))

    return (
        <>
            <div className="grid grid-cols-1 p-8 m-8 md:grid-cols-2 lg:grid-cols-5">
                {ProductsCardElement}
            </div>

        </>
    )
}