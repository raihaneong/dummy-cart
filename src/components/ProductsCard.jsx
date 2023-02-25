

export default function ProductsCard(props) {

    const product = props.product

    return (
        <div className="card w-96 bg-base-100 shadow-xl p-8">
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-subtitle">Rp {product.price}</p>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}