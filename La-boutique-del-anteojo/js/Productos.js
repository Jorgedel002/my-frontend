const db = firebase.firestore();

const addProdut = document.querySelector('#add-products');

addProdut.addEventListener('submit', async (e) => {
    e.preventDefault();

    const productName = addProdut['product-name'].value;
    const productPrice = addProdut['product-price'].value;
    const bgColor = addProdut['bg-color'].value;
    
    const response = await db.collections('products').doc().set({
        productName,
        productPrice,
        bgColor
    })
    console.log(response)
})