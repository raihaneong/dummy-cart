
const productsArray = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        description: "Product 1 Description",
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        description: "Product 2 Description",
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        description: "Product 3 Description",
    },
    {
        id: 4,
        name: "Product 4",
        price: 400,
        description: "Product 4 Description",
    },
    {
        id: 5,
        name: "Product 5",
        price: 500,
        description: "Product 5 Description",
    },
    {
        id: 6,
        name: "Product 6",
        price: 600,
        description: "Product 6 Description",
    },

]

function getProductData(product) {
    let prod =  productsData.find(p => p.id === product.id);

    if (productsData == undefined) {
        console.log(`Product with id ${product.id} not found`);
    }
    return prod
}



export { productsArray };