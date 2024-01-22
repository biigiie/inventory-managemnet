document.addEventListener('DOMContentLoaded', () => {
    loadInventory();
});

function loadInventory() {
    fetch('data/inventory_data.json')
        .then(response => response.json())
        .then(data => {
            displayInventory(data);
        })
        .catch(error => console.error('Error loading inventory:', error));
}

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

    const adjustmentData = { item: itemName, quantityChange: quantityChange };

    fetch('/adjustQuantity', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(adjustmentData),
    })
        .then(response => response.text())
        .then(message => {
            alert(message);
            loadInventory();
        })
        .catch(error => console.error('Error adjusting quantity:', error));
}
