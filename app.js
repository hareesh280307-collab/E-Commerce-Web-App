const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 800 },
    { id: 6, name: "Smart Watch", price: 5000 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display products
function loadProducts() {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "";

    products.forEach(p => {
        productContainer.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

// Add to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

// View cart
function viewCart() {
    const modal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
        total += item.price;
    });

    totalPrice.innerText = total;
    modal.style.display = "block";
}

// Close cart
function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

// Checkout
function checkout() {
    alert("Order placed successfully!");
    cart = [];
    localStorage.removeItem("cart");
    updateCartCount();
    closeCart();
}

// Initialize
loadProducts();
updateCartCount();
