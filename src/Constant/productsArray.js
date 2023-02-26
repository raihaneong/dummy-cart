
const productsArray = [
    {
        id: 1,
        name: "Tea",
        price: 3,
        description: "A cup of tea that makes you feel good",
    },
    {
        id: 2,
        name: "Coffee",
        price: 5,
        description: "Enjoy a cup of coffee to start your day",
    },
    {
        id: 3,
        name: "Sunglasses",
        price: 10,
        description: "A pair of sunglasses to protect your eyes",
    },
    {
        id: 4,
        name: "Laptop",
        price: 1000,
        description: "a laptop to work from home",
    },
    {
        id: 5,
        name: "Camera",
        price: 30,
        description: "Take pictures with this camera",
    },
    {
        id: 6,
        name: "Bag",
        price: 15,
        description: "Bag to carry your stuff",
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