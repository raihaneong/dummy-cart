import { productsArray } from "../Constant/productsArray"
import ProductsCard from "../components/ProductsCard"

console.log(productsArray.map((product) => product))

export default function Store() {

    const ProductsCardElement = productsArray.map((product) => (
        <ProductsCard key={product.id} products={product} />
    ))

    return (
        <>
            <div className="grid grid-cols-5 gap-8 p-32">
                {ProductsCardElement}
            </div>

        </>
    )
}