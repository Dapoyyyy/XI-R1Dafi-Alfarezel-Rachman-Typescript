/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stockQuantities = [
  0, 5, 12, 8, 20,
  15, 0, 3, 10, 7,
  25, 30, 0, 2, 18
];

let outOfStock = 0;
let lowStock = 0;
let safeStock = 0;
let totalInventory = 0;

for (let i = 0; i < stockQuantities.length; i++) {
  const stock = stockQuantities[i];

  totalInventory += stock;

  if (stock === 0) {
    outOfStock++;
  } else if (stock < 10) {
    lowStock++;
  } else {
    safeStock++;
  }
}

const averageStock = totalInventory / stockQuantities.length;

console.log("Out of Stock:", outOfStock);
console.log("Low Stock:", lowStock);
console.log("Safe Stock:", safeStock);
console.log("Total Inventory:", totalInventory);
console.log("Average Stock:", averageStock);