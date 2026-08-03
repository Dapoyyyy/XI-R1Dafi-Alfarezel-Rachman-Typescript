/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const Mechanicalkeyboardprice: number = 850000;
const MechanicalkeyboardQuantity: number = 1;
const WirelessmousePrice: number = 275000
const WirelessmouseQuantity: number = 2;
const MousepadPrice: number = 120000;
const MousepadPriceQuantity: number = 1;
const discount: number =10;
const premiummember:  boolean = true;
const totalItem: number = MechanicalkeyboardQuantity + WirelessmouseQuantity + MousepadPriceQuantity;
const subtotal: number = (Mechanicalkeyboardprice * MechanicalkeyboardQuantity) + (WirelessmousePrice * WirelessmouseQuantity) + (MousepadPrice *MousepadPriceQuantity );
const discountAmount: number = subtotal > 1000000 ? subtotal * (discount / 100) : 0;
const shippingCost: number = premiummember ? 0 : 50000;
const finalPayment: number = subtotal - discountAmount + shippingCost;


console.log("==Shopping Cart Summary==");
console.log("Subtotal :", subtotal);
console.log("Discount Amount :", discountAmount);
console.log("Shipping Cost :", shippingCost);
console.log("Total Items Purchased :", totalItem);
console.log("Final Payment :", finalPayment);
console.log("Is Premium Member :", premiummember);
