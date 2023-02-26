import { productsArray } from "../Constant/productsArray"
import ProductsCard from "../components/ProductsCard"

console.log(productsArray.map((product) => product))

export default function Store() {



    return (
        <>
            <div className="grid grid-cols-4 gap-8 p-32">
                {productsArray.map((product) => (
                    <ProductsCard key={product.id} name={product.name} price={product.price} description={product.description}/>
                ))}
            </div>

        </>
    )
}