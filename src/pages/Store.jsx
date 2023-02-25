import productsArray from "../Constant/productsArray"
import ProductsCard from "../components/ProductsCard"


export default function Store() {

    return (
        <div className="container mx-auto">
            <h1 className=" m-8 p-8 text-5xl">welcome</h1>
            <h2>what do you wanna buy</h2>
            <p>take a look</p>
            <br />
            {/* <div className="grid grid-cols-3 gap-4">
                {productsArray.map((product) => (
                    <ProductsCard key={product.id} product={product.name} />
                ))}
            </div> */}
            <ProductsCard product={productsArray.name} />

            <hr />
            <br />
            <a href="success">success | </a>
            <a href="cancel">cancel | </a>
            <a href="asdf">not found</a>
        </div>
    )
}