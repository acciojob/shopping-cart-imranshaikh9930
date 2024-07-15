 document.addEventListener('DOMContentLoaded', function() {
            const itemNameInput = document.getElementById('item-name-input');
            const itemPriceInput = document.getElementById('item-price-input');
            const itemQtyInput = document.getElementById('item-qty-input');
            const addButton = document.getElementById('add');
            const itemListBody = document.getElementById('item-list-body');
            const grandTotalSpan = document.getElementById('grand-total');

            addButton.addEventListener('click', function() {
                const itemName = itemNameInput.value.trim();
                const itemPrice = parseFloat(itemPriceInput.value);
                const itemQty = parseInt(itemQtyInput.value);

                // Validate inputs
                if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0 || isNaN(itemQty) || itemQty <= 0) {
                    alert('Please enter valid item details.');
                    return;
                }

                // Calculate total price for the item
                const totalPrice = itemPrice * itemQty;

                // Create new table row
                const newRow = document.createElement('tr');
                const itemNameCell = document.createElement('td');
                itemNameCell.textContent = itemName;
                const itemPriceCell = document.createElement('td');
                itemPriceCell.textContent = `$${itemPrice.toFixed(2)}`;
                const itemQtyCell = document.createElement('td');
                itemQtyCell.textContent = itemQty.toString();
                const itemTotalCell = document.createElement('td');
                itemTotalCell.textContent = `$${totalPrice.toFixed(2)}`;

                newRow.appendChild(itemNameCell);
                newRow.appendChild(itemPriceCell);
                newRow.appendChild(itemQtyCell);
                newRow.appendChild(itemTotalCell);
                itemListBody.appendChild(newRow);

                // Update grand total
                const currentTotal = parseFloat(grandTotalSpan.textContent);
                const newTotal = currentTotal + totalPrice;
                grandTotalSpan.textContent = newTotal.toFixed(2);

                // Clear input fields
                itemNameInput.value = '';
                itemPriceInput.value = '';
                itemQtyInput.value = '1';
            });
        });