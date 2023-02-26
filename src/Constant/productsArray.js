
const productsArray = [
    {
        id: 1,
        name: "Tea",
        price: 3.49,
        description: "A cup of tea that makes you feel good",
    },
    {
        id: 2,
        name: "Coffee",
        price: 5.99,
        description: "Enjoy a cup of coffee to start your day",
    },
    {
        id: 3,
        name: "Sunglasses",
        price: 10.99,
        description: "A pair of sunglasses to protect your eyes",
    },
    {
        id: 4,
        name: "Laptop",
        price: 1499.99,
        description: "a laptop to work from home",
    },
    {
        id: 5,
        name: "Camera",
        price: 30.49,
        description: "Take pictures with this camera",
    },
    {
        id: 6,
        name: "Bag",
        price: 14.99,
        description: "Bag to carry your stuff",
    }, 

]

function getProductData(id) {
    let products =  productsArray.find(product => product.id === id);

    if (products == undefined) {
        console.log(`Product with id ${id} not found`);
    }
    return products
}



export { productsArray, getProductData };