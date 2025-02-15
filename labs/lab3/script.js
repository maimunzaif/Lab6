// Inventory Array
let inventory = [
    { name: "Magic Wand", type: "wand", price: 50, quantity: 3, description: "A powerful wand for wizards." },
    { name: "Healing Potion", type: "potion", price: 10, quantity: 5, description: "Restores health." },
    { name: "Guitar", type: "guitar", price: 120, quantity: 2, description: "A musical instrument." },
    { name: "Enchanted Shield", type: "shield", price: 80, quantity: 1, description: "Protects from magic attacks." },
    { name: "Silver Sword", type: "sword", price: 150, quantity: 2, description: "A sharp and durable blade." },
    { name: "Herbal Remedy", type: "potion", price: 25, quantity: 4, description: "Boosts stamina and focus." },
    { name: "Flute", type: "instrument", price: 30, quantity: 3, description: "Produces beautiful melodies." },
    { name: "Lantern", type: "tool", price: 15, quantity: 6, description: "Lights up dark places." }
];


// Function to display items
function listItems() {
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.innerHTML = "";

    inventory.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} (${item.type}) - $${item.price} x ${item.quantity}`;
        inventoryList.appendChild(li);
    });
}

// Function to add an item
function addItem(item) {
    inventory.push(item);
    listItems();
}

// Function to add item from form input
function addItemFromForm() {
    let name = document.getElementById("itemName").value;
    let type = document.getElementById("itemType").value;
    let price = parseFloat(document.getElementById("itemPrice").value);
    let quantity = parseInt(document.getElementById("itemQuantity").value);
    let description = document.getElementById("itemDescription").value;

    if (name && type && !isNaN(price) && !isNaN(quantity) && description) {
        addItem({ name, type, price, quantity, description });
    } else {
        alert("Please enter valid item details.");
    }
}

// Function to remove an item
function removeItem(itemName) {
    inventory = inventory.filter(item => item.name.toLowerCase() !== itemName.toLowerCase());
    listItems();
}

// Function to get a specific item
function getItem(itemName) {
    return inventory.find(item => item.name.toLowerCase() === itemName.toLowerCase());
}

// Function to search items
function searchItems() {
    let query = document.getElementById("search").value.toLowerCase();
    const filteredItems = inventory.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.type.toLowerCase().includes(query)
    );

    const inventoryList = document.getElementById("inventoryList");
    inventoryList.innerHTML = "";

    filteredItems.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} (${item.type}) - $${item.price} x ${item.quantity}`;
        inventoryList.appendChild(li);
    });
}

// Function to calculate total inventory value
function calculateTotalValue() {
    let totalValue = inventory.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById("totalValue").textContent = totalValue;
}

// BONUS FUNCTIONS

// Group items by type
function groupByCategory() {
    let grouped = {};

    inventory.forEach(item => {
        if (!grouped[item.type]) {
            grouped[item.type] = [];
        }
        grouped[item.type].push(item);
    });

    console.log(grouped);
}

// Find duplicate items
function findDuplicates() {
    let seen = new Set();
    let duplicates = [];

    inventory.forEach(item => {
        let key = item.name.toLowerCase();
        if (seen.has(key)) {
            duplicates.push(item);
        } else {
            seen.add(key);
        }
    });

    console.log("Duplicates:", duplicates);
}


// Function to remove an item from inventory
function removeItem(itemName) {
    let index = inventory.findIndex(item => item.name.toLowerCase() === itemName.toLowerCase());

    if (index !== -1) {
        inventory.splice(index, 1); // Remove item
        listItems(); // Update the list
    } else {
        alert("Item not found in inventory.");
    }
}

// Function to remove item based on user input
function removeItemFromInput() {
    let itemName = document.getElementById("removeItemInput").value.trim();

    if (itemName) {
        removeItem(itemName);
        document.getElementById("removeItemInput").value = ""; // Clear input field
    } else {
        alert("Please enter an item name.");
    }
}



// Apply discount
function applyDiscount(discountPercentage) {
    inventory = inventory.map(item => ({
        ...item,
        price: (item.price * (1 - discountPercentage / 100)).toFixed(2)
    }));

    listItems();
}

// Initial load
listItems();
