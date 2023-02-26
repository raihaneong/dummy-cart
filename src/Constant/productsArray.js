
const productsArray = [
    {
        id: 'price_1MfmARK6L9E8BuRsT76In9Qi',
        name: "Tea",
        price: 3.49,
        description: "A cup of tea that makes you feel good",
    },
    {
        id: 'price_1MfmBYK6L9E8BuRsSoMl2f0e',
        name: "Coffee",
        price: 5.99,
        description: "Enjoy a cup of coffee to start your day",
    },
    {
        id: 'price_1MfmC9K6L9E8BuRsq5ZDjuKF',
        name: "Sunglasses",
        price: 10.99,
        description: "A pair of sunglasses to protect your eyes",
    },
    {
        id: 'price_1MfmD8K6L9E8BuRsRyaGJ2be',
        name: "Laptop",
        price: 1499.99,
        description: "a laptop to work from home",
    },
    {
        id: 'price_1MfmDoK6L9E8BuRszIcubN8P',
        name: "Camera",
        price: 30.49,
        description: "Take pictures with this camera",
    },
    {
        id: 'price_1MfmESK6L9E8BuRsN60BLMe1',
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