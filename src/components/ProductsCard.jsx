

export default function ProductsCard({ name, price, description, id}) {


    return (
        <div className="card w-96 bg-base-100 shadow-xl p-8">
            <figure><img src="https://picsum.photos/400/200" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-subtitle">$ {price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                    <p>{id}</p>
                </div>
            </div>
        </div>
    )
}