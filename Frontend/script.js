addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const shoppingCart = document.getElementById('shopping-cart');
    const cartTotalDisplay = document.getElementById('cart-total');
    let cart = [];

    const updateCartDisplay = () => {
        shoppingCart.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            shoppingCart.appendChild(li);
            total += item.price;
        });
        cartTotalDisplay.textContent = total.toFixed(2);
    };

    fetch('/api/products')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
