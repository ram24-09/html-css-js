function updateQty(action) {
  const qtyInput = document.getElementById("prod-qty");
  let currentValue = parseInt(qtyInput.value, 10);

  if (action === "subtract" && currentValue > 1) {
    qtyInput.value = currentValue - 1;
  } else if (action === "add") {
    qtyInput.value = currentValue + 1;
  }
}

function updateInputValue(event) {
  const value = event.target.value;
  // Add your custom logic here if needed
}
