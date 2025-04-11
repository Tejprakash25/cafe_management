// Function to display menu items based on category selection
function showItems(category) {
    const menuDetails = document.getElementById('menu-details');
    menuDetails.innerHTML = '';

    const items = {
        pizza: [
            { name: 'Margherita', price: '250', img: "http://localhost:8080/images/cmsmenu/pizzasection/margheritapizza.jpeg" },
            { name: 'Pepperoni', price: '300', img: "http://localhost:8080/images/cmsmenu/pizzasection/pepperonipizza.jpeg" },
            { name: 'BBQ Chicken', price: '350', img: "http://localhost:8080/images/cmsmenu/pizzasection/bbqchickenpizza.jpeg" },
            { name: 'Veggie Supreme', price: '280', img: "http://localhost:8080/images/cmsmenu/pizzasection/veggiesupremepizza.jpeg" },
            { name: 'Cheese Burst', price: '320', img: "http://localhost:8080/images/cmsmenu/pizzasection/cheeseburstpizza.jpeg" },
            { name: 'Mexican Green Wave', price: '340', img: "http://localhost:8080/images/cmsmenu/pizzasection/mexicangreenwavepizza.jpeg" },
            { name: 'Tandoori Paneer', price: '360', img: "http://localhost:8080/images/cmsmenu/pizzasection/tandooripaneerpizza.jpeg" },
            { name: 'Meat Lovers', price: '380', img: "http://localhost:8080/images/cmsmenu/pizzasection/meatloverspizza.jpeg" },
        ],
        pasta: [
            { name: "Classic Alfredo Pasta", price: "200", img: "http://localhost:8080/images/cmsmenu/pastasection/classicalfredopasta.jpeg" },
            { name: "Pesto Pasta", price: "220", img: "http://localhost:8080/images/cmsmenu/pastasection/pestopasta.jpeg" },
            { name: "Arrabbiata Pasta", price: "210", img: "http://localhost:8080/images/cmsmenu/pastasection/arrabbiatapasta.jpeg" },
            { name: "Four Cheese Pasta", price: "250", img: "http://localhost:8080/images/cmsmenu/pastasection/fourcheesepasta.jpeg" },
            { name: "Mushroom Truffle Pasta", price: "280", img: "http://localhost:8080/images/cmsmenu/pastasection/mushroomtrufflepasta.jpeg" },
            { name: "Seafood Pasta", price: "300", img: "http://localhost:8080/images/cmsmenu/pastasection/seafoodpasta.jpeg" },
            { name: "Carbonara Pasta", price: "270", img: "http://localhost:8080/images/cmsmenu/pastasection/carbonarapasta.jpeg" },
            { name: "Bolognese Pasta", price: "260", img: "http://localhost:8080/images/cmsmenu/pastasection/bolognesepasta.jpeg" },

        ],
        Maggi: [
            { name: "Classic Maggi", price: "50", img: "http://localhost:8080/images/cmsmenu/maggisection/classicmaggi.jpeg" },
            { name: "Cheese Maggi", price: "70", img: "http://localhost:8080/images/cmsmenu/maggisection/cheesemaggi.jpeg" },
            { name: "Spicy Masala Maggi", price: "80", img: "http://localhost:8080/images/cmsmenu/maggisection/spicymasalamaggi.jpeg" },
            { name: "Butter Maggi", price: "90", img: "http://localhost:8080/images/cmsmenu/maggisection/buttermaggi.jpeg" },
            { name: "Vegetable Maggi", price: "100", img: "http://localhost:8080/images/cmsmenu/maggisection/vegetablemaggi.jpeg" },
            { name: "Egg Maggi", price: "110", img: "http://localhost:8080/images/cmsmenu/maggisection/eggmaggi.jpeg" },
            { name: "Chicken Maggi", price: "120", img: "http://localhost:8080/images/cmsmenu/maggisection/chickenmaggi.jpeg" },
            { name: "Tandoori Maggi", price: "130", img: "http://localhost:8080/images/cmsmenu/maggisection/tandoorimaggi.jpeg" },

        ],
        burger: [
            { name: "Classic Veg Burger", price: "120", img: "http://localhost:8080/classicvegbuger.jpeg" },
            { name: "Cheese Burger", price: "150", img: "http://localhost:8080/cheeseburger.jpeg" },
            { name: "BBQ Chicken Burger", price: "180", img: "http://localhost:8080/bbqchickenburger.jpeg" },
            { name: "Paneer Burger", price: "160", img: "http://localhost:8080/paneerburger.jpeg" },
            { name: "Spicy Chicken Burger", price: "200", img: "http://localhost:8080/spicychickenburger.jpeg" },
            { name: "Mushroom Swiss Burger", price: "220", img: "http://localhost:8080/mushroomswissburger.jpeg" },
            { name: "Fish Fillet Burger", price: "230", img: "http://localhost:8080/fishfilletburger.jpeg" },
            { name: "Double Patty Burger", price: "250", img: "http://localhost:8080/doublepattyburger.jpeg" },

        ],
        fries: [
            { name: "Classic Fries", price: "80", img: "http://localhost:8080/images/cmsmenu/friessection/classicfries.jpeg" },
            { name: "Peri Peri Fries", price: "90", img: "http://localhost:8080/images/cmsmenu/friessection/periperifries.jpeg" },
            { name: "Cheese Fries", price: "100", img: "http://localhost:8080/images/cmsmenu/friessection/cheesefries.jpeg" },
            { name: "Masala Fries", price: "110", img: "http://localhost:8080/images/cmsmenu/friessection/masalafries.jpeg" },
            { name: "Garlic Parmesan Fries", price: "120", img: "http://localhost:8080/images/cmsmenu/friessection/garlicparmesanfries.jpeg" },
            { name: "Curly Fries", price: "130", img: "http://localhost:8080/images/cmsmenu/friessection/curlyfries.jpeg" },
            { name: "Chili Cheese Fries", price: "140", img: "http://localhost:8080/images/cmsmenu/friessection/chilicheesefries.jpeg" },
            { name: "Bacon Cheese Fries", price: "150", img: "http://localhost:8080/images/cmsmenu/friessection/baconcheesefries.jpeg" },

        ],
        ColdCoffee: [
            { name: "Classic Cold Coffee", price: "120", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/classiccoldcoffee.jpeg" },
            { name: "Mocha Cold Coffee", price: "140", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/mochacoldcoffee.jpeg" },
            { name: "Caramel Cold Coffee", price: "160", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/caramelcoldcoffee.jpeg" },
            { name: "Hazelnut Cold Coffee", price: "180", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/hazelnutcoldcoffee.jpeg" },
            { name: "Iced Latte", price: "200", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/icedlatte.jpeg" },
            { name: "Vanilla Cold Coffee", price: "220", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/vanillacoldcoffee.jpeg" },
            { name: "Choco Chip Cold Coffee", price: "240", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/chocochipcoldcoffee.jpeg" },
            { name: "Oreo Cold Coffee", price: "260", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/oreocoldcoffee.jpeg" },

        ],
        HotCoffee: [
            { name: "Espresso", price: "100", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/expressocoffee.jpeg" },
            { name: "Cappuccino", price: "120", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/cappuccinocoffee.jpeg" },
            { name: "Latte", price: "140", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/lattecoffee.jpeg" },
            { name: "Americano", price: "160", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/americanocoffee.jpeg" },
            { name: "Mocha", price: "200", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/mochacoffee.jpeg" },
            { name: "Flat White", price: "220", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/flatwhitecoffee.jpeg"},
            { name: "Turkish Coffee", price: "240", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/turkishcoffee.jpeg"},

        ],
        Colddrink: [
            { name: "Cola", price: "50", img: "http://localhost:8080/images/cmsmenu/colddrinksection/cola.jpeg" },
            { name: "Lemon Soda", price: "60", img: "http://localhost:8080/images/cmsmenu/colddrinksection/lemonsoda.jpeg" },
            { name: "Orange Juice", price: "70", img: "http://localhost:8080/images/cmsmenu/colddrinksection/orangejuice.jpeg" },
            { name: "Lime Mojito", price: "80", img: "http://localhost:8080/images/cmsmenu/colddrinksection/limemojito.jpeg" },
            { name: "Blue Lagoon", price: "90", img: "http://localhost:8080/images/cmsmenu/colddrinksection/bluelagoon.jpeg" },
            { name: "Strawberry Shake", price: "100", img: "http://localhost:8080/images/cmsmenu/colddrinksection/strawberryshake.jpeg" },
            { name: "Pineapple Punch", price: "110", img: "http://localhost:8080/images/cmsmenu/colddrinksection/pineapplepuch.jpeg" },
            { name: "Mango Shake", price: "120", img: "http://localhost:8080/images/cmsmenu/colddrinksection/mangoshake.jpeg" },

        ]

        // Add other categories if needed
    };

    if (!items[category]) return;

    items[category].forEach(item => {
        let detailItem = document.createElement('div');
        detailItem.classList.add('detail-item');

        detailItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button class="add-to-cart" onclick="addToCart('${item.name}', ${item.price}, '${item.img}', this)">Add to Cart</button>
        `;

        menuDetails.appendChild(detailItem);
    });
}

// Cart array to store items
let cart = [];
let orderHistory = [];

// Add item to cart
function addToCart(name, price, img, buttonElement) {
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price: Number(price), img, quantity: 1 });
    }

    updateCart();

    // Visual feedback
    if (buttonElement) {
        buttonElement.textContent = "Added!";
        buttonElement.disabled = true;
        setTimeout(() => {
            buttonElement.textContent = "Add to Cart";
            buttonElement.disabled = false;
        }, 800);
    }
}

// Update cart display and buttons
function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const container = document.querySelector('.cart-container');

    cartContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        count += item.quantity;

        let li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.img}" width="40" height="40" style="border-radius: 5px; margin-right: 5px;">
            ${item.name} - ₹${item.price} x ${item.quantity}
            <button onclick="removeFromCart(${index})" style="margin-left: 10px; background: red; color: white; border: none; padding: 5px; cursor: pointer;">Remove</button>
        `;
        cartContainer.appendChild(li);
    });

    cartTotal.textContent = `₹${total}`;
    cartCount.textContent = count;

    if (cart.length > 0) {
        container.classList.add('show');

        // Place Order button
        if (!document.getElementById('place-order-btn')) {
            const orderBtn = document.createElement('button');
            orderBtn.id = 'place-order-btn';
            orderBtn.textContent = 'Place Order';
            orderBtn.style.cssText = `
                margin-top: 10px;
                background-color: green;
                color: white;
                border: none;
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
            `;
            orderBtn.onclick = placeOrder;
            container.appendChild(orderBtn);
        }

        // Clear Cart button
        if (!document.getElementById('clear-cart-btn')) {
            const clearBtn = document.createElement('button');
            clearBtn.id = 'clear-cart-btn';
            clearBtn.textContent = 'Clear Cart';
            clearBtn.style.cssText = `
                margin-top: 10px;
                background-color: orange;
                color: white;
                border: none;
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                margin-left: 10px;
            `;
            clearBtn.onclick = () => {
                cart = [];
                updateCart();
            };
            container.appendChild(clearBtn);
        }

        // Close button
        if (!document.getElementById('close-cart-btn')) {
            const closeBtn = document.createElement('button');
            closeBtn.id = 'close-cart-btn';
            closeBtn.textContent = 'Close';
            closeBtn.style.cssText = `
                margin-top: 10px;
                background-color: #555;
                color: white;
                border: none;
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                margin-left: 10px;
            `;
            closeBtn.onclick = () => {
                container.classList.remove('show');
            };
            container.appendChild(closeBtn);
        }

    } else {
        container.classList.remove('show');
        ['place-order-btn', 'clear-cart-btn', 'close-cart-btn'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) btn.remove();
        });
    }
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Place order and reset cart
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Save current cart to order history
    const orderCopy = JSON.parse(JSON.stringify(cart));
    orderHistory.push(orderCopy);

    alert("Order placed successfully! 🛵🍕");

    // Reset cart
    cart = [];
    updateCart();

    // Close cart panel
    document.querySelector('.cart-container').classList.remove('show');
}

// View previous orders
document.getElementById('view-orders-btn').addEventListener('click', function () {
    const orderHistoryList = document.getElementById('order-history');
    orderHistoryList.innerHTML = '';

    if (orderHistory.length === 0) {
        orderHistoryList.innerHTML = '<li>No previous orders.</li>';
    } else {
        orderHistory.forEach((order, index) => {
            let orderItem = document.createElement('li');
            orderItem.innerHTML = `<strong>Order ${index + 1}</strong><ul>` +
                order.map(item => `<li>${item.name} - ₹${item.price} x ${item.quantity}</li>`).join('') +
                '</ul><br>';
            orderHistoryList.appendChild(orderItem);
        });
    }

    // Toggle visibility
    orderHistoryList.style.display = orderHistoryList.style.display === 'none' ? 'block' : 'none';
});