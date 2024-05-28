const nameInput = document.querySelector("#item-name-input");
const qty = document.querySelector("#item-qty-input")
const priceInput = document.querySelector("#item-price-input");
const priceInput = document.querySelector("#item-price-input");
const addBtn = document.querySelector("#add");
const tbody = document.querySelector("#item-list-body");
const grandTotal = document.querySelector("#total");

let itemCounter = 0;

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const quantity = qty.value.trim();
  const price = parseFloat(priceInput.value);

  // Validate inputs
  if (!name || isNaN(price) || price <= 0) {
    alert('Please enter a valid item name and price.');
    return;
  }

  // Create a new table row
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td id="item-${itemCounter}">${name}</td>
	 <td id="qty-${itemCounter}">${quantity}</td>
    <td id="price-${itemCounter}">${price.toFixed(2)}</td>
  `;

  // Append the new row to the tbody
  tbody.appendChild(tr);

  // Increment the counter for unique IDs
  itemCounter++;

  // Clear the input fields
  nameInput.value = '';
  priceInput.value = '';

  // Update the grand total
  updateGrandTotal();
});

function updateGrandTotal() {
  let grandTotalValue = 0;
  const itemPrices = document.querySelectorAll('#item-list-body td[id^="price-"]');
  const itemQuantities = document.querySelectorAll('#item-list-body td[id^="qty-"]');

  // Ensure both NodeLists are of the same length
  if (itemPrices.length !== itemQuantities.length) {
    console.error("Mismatch between number of prices and quantities.");
    return;
  }

  itemPrices.forEach((price, index) => {
    const quantity = parseInt(itemQuantities[index].textContent);
    grandTotalValue += parseFloat(price.textContent) * (isNaN(quantity) ? 1 : quantity);
  });

  grandTotal.textContent = `Grand Total: ${grandTotalValue.toFixed(2)}`;
}




