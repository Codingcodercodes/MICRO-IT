// --- PRODUCT DATA ---
const products = [
    // Dresses
    { id: 1, name: "Silk Evening Gown", price: 299.99, category: "Dresses", img: "https://images.unsplash.com/photo-1742794559863-c5f9711a46dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&q=80", details: "Hand-beaded silk evening dress with lace detailing." },
    { id: 2, name: "Summer Floral Dress", price: 89.99, category: "Dresses", img: "https://images.unsplash.com/photo-1658955924468-a4ee5fa6aeb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&q=80", details: "Lightweight, breezy dress with vibrant floral print." },
    { id: 3, name: "Black Cocktail Dress", price: 119.99, category: "Dresses", img: "https://images.unsplash.com/photo-1723813196516-fc9dff5f8c0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&q=80", details: "Classic black dress for all occasions." },
    { id: 4, name: "Velvet Party Dress", price: 159.99, category: "Dresses", img: "https://images.unsplash.com/photo-1687935786673-92bdf92c0737?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&q=80", details: "Plush velvet with a modern cut." },
    // Shoes
    { id: 5, name: "Leather Ankle Boots", price: 189.99, category: "Shoes", img: "https://images.unsplash.com/photo-1557870187-4304e2c2b357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&q=80", details: "Italian leather boots with rubber sole." },
    { id: 6, name: "White Sneakers", price: 79.99, category: "Shoes", img: "https://images.unsplash.com/photo-1597350584914-55bb62285896?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&q=80", details: "Minimalist design, all-day comfort." },
    { id: 7, name: "Purple Heels", price: 99.99, category: "Shoes", img: "https://images.unsplash.com/photo-1645477352686-8c2a686564f8?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&q=80", details: "Striking purple heels for special events." },
    { id: 8, name: "Classic Loafers", price: 109.99, category: "Shoes", img: "https://images.unsplash.com/photo-1608629601270-a0007becead3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&q=80", details: "Timeless style in premium leather." },
    // Bags
    { id: 9, name: "Leather Tote Bag", price: 149.99, category: "Bags", img: "https://images.unsplash.com/photo-1624687943971-e86af76d57de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=400&q=80", details: "Spacious, elegant, and versatile." },
    { id: 10, name: "Mini Crossbody Bag", price: 69.99, category: "Bags", img: "https://imgs.search.brave.com/Ji1OXwxsvfEPr525f5LTq_zDF9A55FY3WFFa4qh_SKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhdmVsYW5kbGVp/c3VyZS5jb20vdGht/Yi8tMGFLUXlsWGR0/WGI4ZDNBVlo5TzNM/WGpneGs9L2ZpdC1p/bi8xNTAweDEwMDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCkva2FhaS1taW5p/LWJvd2xlci1iYWct/Mzg3M2MzOTg3ZTI1/NDRkMjk4MDQ1NTll/NzE2YzE0NWUuanBn?auto=format&fit=crop&w=400&q=80", details: "Perfect for essentials on the go." },
    { id: 11, name: "Purple Clutch", price: 54.99, category: "Bags", img: "https://imgs.search.brave.com/vG7PlL64u0rsehmY5R7IpiIh5OOee6HXWEzwJ_7X9HE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd29tZW4t/YmFncy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMTAv/YW50aXF1ZS1wdXJw/bGUuanBnP2ZpdD02/MDAsNjAwJnNzbD0x?auto=format&fit=crop&w=400&q=80", details: "Bold color, sleek design." },
    { id: 12, name: "Canvas Backpack", price: 59.99, category: "Bags", img: "https://imgs.search.brave.com/bi0Pjd9oF8sJgLOnKJXBWbSf94GG9-NM_LEXeSbYVlM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFsOXJ3cXpwNkwu/anBn?auto=format&fit=crop&w=400&q=80", details: "Durable and stylish for everyday use." },
    // Accessories
    { id: 13, name: "Gold Hoop Earrings", price: 39.99, category: "Accessories", img: "https://imgs.search.brave.com/unMsh_UKA6gydDPjMTHHVizd2owTnJE5-Kv9lR4r9DA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z29yamFuYS5jb20v/Y2RuL3Nob3AvZmls/ZXMvMjA5LTAwMi1H/U18xLmpwZz9jcm9w/PWNlbnRlciZhbXA7/aGVpZ2h0PTI1NjAm/YW1wO3Y9MTcwMTQ2/MzM0OSZhbXA7d2lk/dGg9MTkyMCZlbS1m/b3JtYXQ9YXV0bw?auto=format&fit=crop&w=400&q=80", details: "Timeless gold hoops." },
    { id: 14, name: "Purple Silk Scarf", price: 29.99, category: "Accessories", img: "https://imgs.search.brave.com/H-0KRaleUqBziAwLvBgnGxe6L0K0uKrZ6e94HYjcCuY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFtc0Z0cVVxV0wu/anBn?auto=format&fit=crop&w=400&q=80", details: "Soft, luxurious silk." },
    { id: 15, name: "Studded Belt", price: 24.99, category: "Accessories", img: "https://imgs.search.brave.com/lAb4CUNwbWGBLvkIYQSSqpYm2t6rrbZVqbJiH3oH3d4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFYa2E0UUZXcEwu/anBn?auto=format&fit=crop&w=400&q=80", details: "Add some edge to any outfit." },
    { id: 16, name: "Designer Sunglasses", price: 89.99, category: "Accessories", img: "https://imgs.search.brave.com/xksNkjkMHDsHGusV2vBOBfqbp97ZHcg_REwcWSCOIEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlmZmV5ZXdlYXIu/Y29tL2Nkbi9zaG9w/L3Byb2R1Y3RzL2Rp/ZmYtZXlld2Vhci1z/YW5kcmEtbGlnaHQt/cGluay1jcnlzdGFs/LWR1c2stZ3JhZGll/bnQtc3VuZ2xhc3Nl/cy1hbHQtMV84MDB4/LmpwZz92PTE2NzM1/NTI0MDQ?auto=format&fit=crop&w=400&q=80", details: "UV protection, stylish frames." },
    // Jewelry
    { id: 17, name: "Diamond Pendant", price: 399.99, category: "Jewelry", img: "https://imgs.search.brave.com/WJEzo8MiiGFiLHmId8bWSpDaIamUFOR3tBlPbVLZl7Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/aWRjLmNvbS9jZG4v/c2hvcC9wcm9kdWN0/cy9EaWFtb25kX1Bl/bmRhbnRfZmFlZDc2/MGEtNmFkMS00ZWUy/LWFiM2EtOGJjYzJh/NzFlMWFjX2xhcmdl/LmpwZz92PTE1NzU5/NDc3NTY?auto=format&fit=crop&w=400&q=80", details: "Elegant diamond on a gold chain." },
    { id: 18, name: "Purple Gemstone Ring", price: 129.99, category: "Jewelry", img: "https://imgs.search.brave.com/RoW29jNbMFCkp5RDAXXaLhq8AqqbLs6ucfJF-OVAuIA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93aW1z/aS5jby9jZG4vc2hv/cC9maWxlcy9SMDAy/ODVfMTA5NjVkNjEt/YTRlMC00MDkzLTkz/NjItODc4MTJkMWFj/M2E3LmpwZz92PTE3/MjUyNjE4OTcmd2lk/dGg9NDgw?auto=format&fit=crop&w=400&q=80", details: "Amethyst centerpiece." },
    { id: 19, name: "Silver Charm Bracelet", price: 59.99, category: "Jewelry", img: "https://imgs.search.brave.com/EZYPuYg2zMUl5JuzCDy9mE-zcaKn8aHEkeaymbvghyI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFHMVJBM2l6ekwu/anBn?auto=format&fit=crop&w=400&q=80", details: "Customizable with your favorite charms." },
    { id: 20, name: "Pearl Drop Earrings", price: 44.99, category: "Jewelry", img: "https://imgs.search.brave.com/3ZHvINwlzo0CjNOfI_5ntk6jQzK8Hkj_xdYYHPBMNf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYXJl/dGhjb2xidXJuLmNv/bS9jZG4vc2hvcC9m/aWxlcy9KRS00MjMw/XzEuanBnP2Nyb3A9/Y2VudGVyJmhlaWdo/dD0xMjk5JnY9MTcz/MTk1OTM1MCZ3aWR0/aD0xMDAw?auto=format&fit=crop&w=400&q=80", details: "Classic pearls for timeless beauty." },
    // Add more products as desired...
];

// --- CART LOGIC ---
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }

function addToCart(id) {
    const item = cart.find(i => i.id === id);
    if (item) item.qty += 1;
    else cart.push({ id, qty: 1 });
    saveCart();
    renderCart();
    updateCartCount();
    openCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.reduce((acc, i) => acc + i.qty, 0);
}

function renderCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        total += product.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <span>${product.name} x${item.qty}</span>
            <span>$${(product.price * item.qty).toFixed(2)}</span>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">&times;</button>
        `;
        cartItems.appendChild(div);
    });
    document.querySelector('.cart-total').textContent = `Total: $${total.toFixed(2)}`;
}
function openCart() {
    document.getElementById('cart').classList.add('open');
}
function toggleCart() {
    document.getElementById('cart').classList.toggle('open');
}
document.getElementById('cart-link').onclick = (e) => { e.preventDefault(); openCart(); };

// --- PRODUCT RENDERING ---
function renderProducts() {
    const grid = document.getElementById('product-list');
    grid.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price">$${product.price.toFixed(2)}</div>
            <p>${product.details}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

// --- AUTH LOGIC ---
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

function showModal(id) {
    document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}
function switchModal(closeId, openId) {
    closeModal(closeId);
    showModal(openId);
}

window.onclick = function(event) {
    ['login-modal','register-modal'].forEach(id => {
        const modal = document.getElementById(id);
        if (event.target === modal) modal.style.display = "none";
    });
};

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    if (localStorage.getItem('user_' + email)) {
        alert('Account already exists!');
        return;
    }
    const user = { name, email, password, orders: [] };
    localStorage.setItem('user_' + email, JSON.stringify(user));
    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;
    closeModal('register-modal');
    updateAuthUI();
    showProfile();
}
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const userRaw = localStorage.getItem('user_' + email);
    if (!userRaw) { alert('No account found.'); return; }
    const user = JSON.parse(userRaw);
    if (user.password !== password) { alert('Incorrect password.'); return; }
    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;
    closeModal('login-modal');
    updateAuthUI();
    showProfile();
}
function logoutUser() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    updateAuthUI();
    document.getElementById('profile').classList.add('hidden');
}
function updateAuthUI() {
    if (currentUser) {
        document.getElementById('login-btn').classList.add('hidden');
        document.getElementById('register-btn').classList.add('hidden');
        document.getElementById('logout-btn').classList.remove('hidden');
        document.getElementById('profile-link').classList.remove('hidden');
    } else {
        document.getElementById('login-btn').classList.remove('hidden');
        document.getElementById('register-btn').classList.remove('hidden');
        document.getElementById('logout-btn').classList.add('hidden');
        document.getElementById('profile-link').classList.add('hidden');
    }
}
document.getElementById('profile-link').onclick = function(e) {
    e.preventDefault();
    showProfile();
};
function showProfile() {
    if (!currentUser) return;
    document.getElementById('profile').classList.remove('hidden');
    document.getElementById('profile-info').innerHTML = `
        <b>Name:</b> ${currentUser.name}<br>
        <b>Email:</b> ${currentUser.email}
    `;
    renderOrderHistory();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderOrderHistory() {
    const orders = currentUser.orders || [];
    const container = document.getElementById('order-history');
    if (orders.length === 0) {
        container.innerHTML = "<em>No orders yet.</em>";
        return;
    }
    container.innerHTML = '';
    orders.forEach((order, idx) => {
        const div = document.createElement('div');
        div.className = 'order-entry';
        div.innerHTML = `<b>Order #${idx+1}</b> (${order.date})<br>
            ${order.items.map(i => {
                const p = products.find(p => p.id === i.id);
                return `${p.name} x${i.qty}`;
            }).join(', ')}
            <br><b>Total:</b> $${order.total.toFixed(2)}
        `;
        container.appendChild(div);
    });
}

// --- CHECKOUT ---
function checkout() {
    if (!currentUser) {
        alert('Please login or register to checkout.');
        showModal('login-modal');
        return;
    }
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    // Save order to user's order history
    const order = {
        date: new Date().toLocaleDateString(),
        items: cart.map(i => ({ id: i.id, qty: i.qty })),
        total: cart.reduce((sum, i) => sum + products.find(p => p.id === i.id).price * i.qty, 0)
    };
    currentUser.orders = currentUser.orders || [];
    currentUser.orders.push(order);
    localStorage.setItem('user_' + currentUser.email, JSON.stringify(currentUser));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    cart = [];
    saveCart();
    renderCart();
    updateCartCount();
    alert('Order placed! Thank you for shopping with PurpleLuxe.');
    showProfile();
    document.getElementById('cart').classList.remove('open');
}

// --- INIT ---
renderProducts();
renderCart();
updateCartCount();
updateAuthUI();
if (currentUser) showProfile();
