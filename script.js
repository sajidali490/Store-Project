function addToCart(item, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ item, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item + " added to cart!");
}

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;
    container.innerHTML = '';

    cartItems.forEach(({ item, price }, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${item} - Rs. ${price} <button onclick="removeItem(${index})">Remove</button></p>`;
        container.appendChild(div);
        total += price;
    });

    totalElement.textContent = "Total: Rs. " + total;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

if (document.getElementById('cart-items')) {
    window.onload = loadCart;
}