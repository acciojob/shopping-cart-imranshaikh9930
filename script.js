const nameInput = document.querySelector("#item-name-input");
const priceInput = document.querySelector("#item-price-input");
const addBtn = document.querySelector("#add");
const tbody = document.querySelector("#item-list-body");
const grandTotal = document.querySelector("#total");

let itemCounter = 0;

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
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
  itemPrices.forEach(price => {
    grandTotalValue += parseFloat(price.textContent);
  });
  grandTotal.textContent = `Grand Total: ${grandTotalValue.toFixed(2)}`;
}
