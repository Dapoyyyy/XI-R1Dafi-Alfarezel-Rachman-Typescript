/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const MechanicalKeyboardPrice: number = 850000;
const MechanicalKeyboardQuantity: number = 1;
const WirelessMousePrice: number = 275000;
const WirelessMouseQuantity: number = 2;
const MonitorStandPrice: number = 420000;
const MonitorStandQuantity: number = 1;
const VoucherValue: number = 100000;
const IsPremiumMember: boolean = true;
const RewardPointRate: number = 50000;
const VATRate: number = 0.11;
const ProductSubtotal: number = (MechanicalKeyboardPrice * MechanicalKeyboardQuantity) + (WirelessMousePrice * WirelessMouseQuantity) + (MonitorStandPrice * MonitorStandQuantity);
const MembershipDiscount: number = IsPremiumMember ? ProductSubtotal * 0.10 : 0;
const PaymentBeforeVoucher: number = ProductSubtotal - MembershipDiscount;
const VoucherDeduction: number = PaymentBeforeVoucher >= VoucherValue ? VoucherValue : PaymentBeforeVoucher;
const PaymentBeforeTax: number = PaymentBeforeVoucher - VoucherDeduction;
const VAT: number = PaymentBeforeTax * VATRate;
const FinalPayment: number = PaymentBeforeTax + VAT;
const RewardPoints: number = Math.floor(PaymentBeforeTax / RewardPointRate);
const IsEligibleForFreeShipping: boolean = IsPremiumMember || PaymentBeforeTax > 1500000;

console.log("==Checkout Summary==");
console.log("Product Subtotal:", ProductSubtotal);
console.log("Membership Discount:", MembershipDiscount);
console.log("Voucher Deduction:", VoucherDeduction);
console.log("Payment Before Tax:", PaymentBeforeTax);
console.log("VAT:", VAT);
console.log("Final Payment:", FinalPayment);
console.log("Reward Points Earned:", RewardPoints);
console.log("Is Eligible for Free Shipping:", IsEligibleForFreeShipping);

