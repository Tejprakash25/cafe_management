const categories = [
  "Pizza", "Pasta", "Maggi", "Burger", "Fries", "ColdCoffee", "HotCoffee", "ColdDrink"
];

const menuData = {
  Pizza: [{name: 'Margherita', price: '250', img: "http://localhost:8080/images/cmsmenu/pizzasection/margheritapizza.jpg" },
    { name: 'Pepperoni', price: '300', img:"http://localhost:8080/images/cmsmenu/pizzasection/pepperonipizza.jpg" },
    { name: 'BBQ Chicken', price: '350', img: "http://localhost:8080/images/cmsmenu/pizzasection/bbqchickenpizza.jpg" },
    { name: 'Veggie Supreme', price: '280', img: "http://localhost:8080/images/cmsmenu/pizzasection/veggiesupremepizza.jpg" },
    { name: 'Cheese Burst', price: '320', img: "http://localhost:8080/images/cmsmenu/pizzasection/cheeseburstpizza.jpg" },
    { name: 'Mexican Green Wave', price: '340', img: "http://localhost:8080/images/cmsmenu/pizzasection/mexicangreenwavepizza.jpg" },
    { name: 'Tandoori Paneer', price: '360', img: "http://localhost:8080/images/cmsmenu/pizzasection/tandooripaneerpizza.jpg" },
    { name: 'Meat Lovers', price: '380', img: "http://localhost:8080/images/cmsmenu/pizzasection/meatloverspizza.jpg" },
],
    Pasta: [{ name: "Classic Alfredo Pasta", price: "200", img: "http://localhost:8080/images/cmsmenu/pastasection/classicalfredopasta.jpg" },
    { name: "Pesto Pasta", price: "220", img: "http://localhost:8080/images/cmsmenu/pastasection/pestopasta.jpg" },
    { name: "Arrabbiata Pasta", price: "210", img: "http://localhost:8080/images/cmsmenu/pastasection/arrabbiatapasta.jpg" },
    { name: "Four Cheese Pasta", price: "250", img: "http://localhost:8080/images/cmsmenu/pastasection/fourcheesepasta.jpg" },
    { name: "Mushroom Truffle Pasta", price: "280", img: "http://localhost:8080/images/cmsmenu/pastasection/mushroomtrufflepasta.jpg" },
    { name: "Seafood Pasta", price: "300", img: "http://localhost:8080/images/cmsmenu/pastasection/seafoodpasta.jpg" },
    { name: "Carbonara Pasta", price: "270", img: "http://localhost:8080/images/cmsmenu/pastasection/carbonarapasta.jpg" },
    { name: "Bolognese Pasta", price: "260", img: "http://localhost:8080/images/cmsmenu/pastasection/bolognesepasta.jpg" },
    ],


    Maggi: [{ name: "Classic Maggi", price: "50", img: "http://localhost:8080/images/cmsmenu/maggisection/classicmaggi.jpg" },
        { name: "Cheese Maggi", price: "70", img: "http://localhost:8080/images/cmsmenu/maggisection/cheesemaggi.jpg" },
        { name: "Spicy Masala Maggi", price: "80", img: "http://localhost:8080/images/cmsmenu/maggisection/spicymasalamaggi.jpg" },
        { name: "Butter Maggi", price: "90", img: "http://localhost:8080/images/cmsmenu/maggisection/buttermaggi.jpg" },
        { name: "Vegetable Maggi", price: "100", img: "http://localhost:8080/images/cmsmenu/maggisection/vegetablemaggi.jpg" },
        { name: "Egg Maggi", price: "110", img: "http://localhost:8080/images/cmsmenu/maggisection/eggmaggi.jpg" },
        { name: "Chicken Maggi", price: "120", img: "http://localhost:8080/images/cmsmenu/maggisection/chickenmaggi.jpg" },
        { name: "Tandoori Maggi", price: "130", img: "http://localhost:8080/images/cmsmenu/maggisection/tandoorimaggi.jpg" },
    ],

    Burger: [{ name: "Classic Veg Burger", price: "120", img: "http://localhost:8080/images/cmsmenu/burgersection/classicvegbuger.jpg" },
        { name: "Cheese Burger", price: "150", img: "http://localhost:8080/images/cmsmenu/burgersection/cheeseburger.jpg" },
        { name: "BBQ Chicken Burger", price: "180", img: "http://localhost:8080/images/cmsmenu/burgersection/bbqchickenburger.jpg" },
        { name: "Paneer Burger", price: "160", img: "http://localhost:8080/images/cmsmenu/burgersection/paneerburger.jpg" },
        { name: "Spicy Chicken Burger", price: "200", img: "http://localhost:8080/images/cmsmenu/burgersection/spicychickenburger.jpg" },
        { name: "Mushroom Swiss Burger", price: "220", img: "http://localhost:8080/images/cmsmenu/burgersection/mushroomswissburger.jpg" },
        { name: "Fish Fillet Burger", price: "230", img: "http://localhost:8080/images/cmsmenu/burgersection/fishfilletburger.jpg" },
        { name: "Double Patty Burger", price: "250", img: "http://localhost:8080/images/cmsmenu/burgersection/doublepattyburger.jpg" },
    ],
    Fries: [{ name: "Classic Fries", price: "80", img: "http://localhost:8080/images/cmsmenu/friessection/classicfries.jpg" },
        { name: "Peri Peri Fries", price: "90", img: "http://localhost:8080/images/cmsmenu/friessection/periperifries.jpg" },
        { name: "Cheese Fries", price: "100", img: "http://localhost:8080/images/cmsmenu/friessection/cheesefries.jpg" },
        { name: "Masala Fries", price: "110", img: "http://localhost:8080/images/cmsmenu/friessection/masalafries.jpg" },
        { name: "Garlic Parmesan Fries", price: "120", img: "http://localhost:8080/images/cmsmenu/friessection/garlicparmesanfries.jpg" },
        { name: "Curly Fries", price: "130", img: "http://localhost:8080/images/cmsmenu/friessection/curlyfries.jpg" },
        { name: "Chili Cheese Fries", price: "140", img: "http://localhost:8080/images/cmsmenu/friessection/chilicheesefries.jpg" },
        { name: "Bacon Cheese Fries", price: "150", img: "http://localhost:8080/images/cmsmenu/friessection/baconcheesefries.jpg" },
    ],
    ColdCoffee: [{ name: "Classic Cold Coffee", price: "120", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/classiccoldcoffee.jpg" },
        { name: "Mocha Cold Coffee", price: "140", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/mochacoldcoffee.jpg" },
        { name: "Caramel Cold Coffee", price: "160", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/caramelcoldcoffee.jpg" },
        { name: "Hazelnut Cold Coffee", price: "180", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/hazelnutcoldcoffee.jpg" },
        { name: "Iced Latte", price: "200", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/icedlatte.jpg" },
        { name: "Vanilla Cold Coffee", price: "220", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/vanillacoldcoffee.jpg" },
        { name: "Choco Chip Cold Coffee", price: "240", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/chocochipcoldcoffee.jpg" },
        { name: "Oreo Cold Coffee", price: "260", img: "http://localhost:8080/images/cmsmenu/coldcoffeesection/oreocoldcoffee.jpg" },
    ],
    HotCoffee: [{ name: "Espresso", price: "100", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/expressocoffee.jpg" },
        { name: "Cappuccino", price: "120", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/cappuccinocoffee.jpg" },
        { name: "Latte", price: "140", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/lattecoffee.jpg" },
        { name: "Americano", price: "160", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/americanocoffee.jpg" },
        { name: "Macchiato", price: "180", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/macchiatocoffee.jpg" },
        { name: "Mocha", price: "200", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/mochacoffee.jpg" },
        { name: "Flat White", price: "220", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/flatwhitecoffee.jpg"},
        { name: "Turkish Coffee", price: "240", img: "http://localhost:8080/images/cmsmenu/hotcoffeesection/turkishcoffee.jpg"},
    ],
    ColdDrink: [{ name: "Cola", price: "50", img: "http://localhost:8080/images/cmsmenu/colddrinksection/cola.jpg" },
        { name: "Lemon Soda", price: "60", img: "http://localhost:8080/images/cmsmenu/colddrinksection/lemonsoda.jpg" },
        { name: "Orange Juice", price: "70", img: "http://localhost:8080/images/cmsmenu/colddrinksection/orangejuice.jpg" },
        { name: "Lime Mojito", price: "80", img: "http://localhost:8080/images/cmsmenu/colddrinksection/limemojito.jpg" },
        { name: "Blue Lagoon", price: "90", img: "http://localhost:8080/images/cmsmenu/colddrinksection/bluelagoon.jpg" },
        { name: "Strawberry Shake", price: "100", img: "http://localhost:8080/images/cmsmenu/colddrinksection/strawberryshake.jpg" },
        { name: "Pineapple Punch", price: "110", img: "http://localhost:8080/images/cmsmenu/colddrinksection/pineapplepuch.jpg" },
        { name: "Mango Shake", price: "120", img: "http://localhost:8080/images/cmsmenu/colddrinksection/mangoshake.jpg" },
    ],


};

const categoryList = document.getElementById("category-list");
const categoryItems = document.getElementById("category-items");

function renderCategories() {
  categories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "category";
    div.innerText = cat;
    div.onclick = () => showCategoryItems(cat);
    categoryList.appendChild(div);
  });
}

function showCategoryItems(category) {
  const items = menuData[category] || [];
  categoryItems.innerHTML = `<h2>${category} Items</h2>`;

  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <div class="name">${item.name} - ₹${item.price}</div>

      <button class="remove-button" onclick="removeItem('${category}', ${index})">Remove</button>
    `;
    categoryItems.appendChild(div);
  });

  const form = document.createElement("div");
  form.className = "add-item-form";
  form.innerHTML = `
    <input type="text" id="newItemName" placeholder="Item Name" />
    <input type="text" id="newItemPrice" placeholder="Price (₹)" />
    <input type="text" id="newItemImg" placeholder="Image File Name (e.g., pizza.jpg)" />
    <button onclick="submitNewItem('${category}')">➕ Add Item</button>
  `;
  categoryItems.appendChild(form);
}

function toggleAvailability(category, index, available) {
  menuData[category][index].available = available;
  showCategoryItems(category);
}

function removeItem(category, index) {
  menuData[category].splice(index, 1);
  showCategoryItems(category);
}

function submitNewItem(category) {
  const name = document.getElementById("newItemName").value.trim();
  const price = document.getElementById("newItemPrice").value.trim();
  const img = document.getElementById("newItemImg").value.trim();

  if (!name || !price || !img) {
    alert("Please fill all fields: Name, Price, and Image.");
    return;
  }

  const newItem = {
    name,
    price,
    img,
    available: true
  };

  menuData[category].push(newItem);

  document.getElementById("newItemName").value = "";
  document.getElementById("newItemPrice").value = "";
  document.getElementById("newItemImg").value = "";

  showCategoryItems(category);
}

renderCategories();