import { productsArray } from "../Constant/productsArray"
import ProductsCard from "../components/ProductsCard"

console.log(productsArray.map((product) => product.name))

export default function Store() {



    return (
        <>
            <h1>gg</h1>
            <div className="grid grid-cols-3 gap-4">
                {productsArray.map((product) => (
                    <ProductsCard product={product} />
                ))}
            </div>

        </>
    )
}