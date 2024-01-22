document.addEventListener('DOMContentLoaded', () => {
    loadInventory();
});

const data = {
    "item1": 100,
    "item2": 50,
    "item3": 75,
    "item4": 120,
    "item5": 200
}
  

function loadInventory() {

        displayInventory(data);
        console.log(data)
}

loadInventory()

function displayInventory(inventory) {
    const inventoryDiv = document.getElementById('inventory');
    inventoryDiv.innerHTML = '<h2>Current Inventory</h2>';
    for (const item in inventory) {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<p>${item}: ${inventory[item]}</p>`;
        inventoryDiv.appendChild(itemDiv);
    }
}

function adjustQuantity() {
    const itemName = document.getElementById('itemName').value;
    const quantityChange = parseInt(document.getElementById('quantityChange').value, 10);

    if (isNaN(quantityChange)) {
        alert('Please enter a valid quantity change.');
        return;
    }
    data[itemName] = data[itemName] - quantityChange
    loadInventory()
}
