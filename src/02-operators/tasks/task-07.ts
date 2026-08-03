/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const RoomPricePerNight: number = 650000;
const NightsStayed: number = 4;
const ServiceCharge: number = 120000;
const TaxRate: number = 0.11;
const IsVIPMember: boolean = true;

const RoomSubtotal: number = RoomPricePerNight * NightsStayed;

const Discount: number = IsVIPMember ? RoomSubtotal * 0.12 : 0;
const Tax: number = (RoomSubtotal - Discount) * TaxRate;

const FinalPayment: number = RoomSubtotal - Discount + Tax + ServiceCharge;
const IsEligibleForFreeBreakfast: boolean = NightsStayed >= 3 || IsVIPMember;

console.log("Room Subtotal:", RoomSubtotal);
console.log("Discount:", Discount);
console.log("Tax:", Tax);
console.log("Final Payment:", FinalPayment);
console.log("Is Eligible for Free Breakfast:", IsEligibleForFreeBreakfast);

