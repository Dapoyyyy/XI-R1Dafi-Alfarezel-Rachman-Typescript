/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const PreviousMeter: number = 25640;
const CurrentMeter: number = 25892;
const ElectricityPricePerKWh: number = 1650;
const SolarPanelInstalled: boolean = true;
const EnergySavingMode: boolean = false;

const EnergyConsumption: number = CurrentMeter - PreviousMeter;
const BaseElectricityBill: number = EnergyConsumption * ElectricityPricePerKWh;

const SolarPanelDiscount: number = SolarPanelInstalled ? BaseElectricityBill * 0.20 : 0;
const EnergySavingDiscount: number = EnergySavingMode ? BaseElectricityBill * 0.05 : 0;
const FinalBill: number = BaseElectricityBill - SolarPanelDiscount - EnergySavingDiscount;

const GreenEnergyProgramEligibility: boolean = SolarPanelInstalled && EnergyConsumption < 300 && EnergySavingMode;

console.log("Energy Consumption (kWh):", EnergyConsumption);
console.log("Base Electricity Bill:", BaseElectricityBill);
console.log("Solar Panel Discount:", SolarPanelDiscount);
console.log("Energy Saving Discount:", EnergySavingDiscount);
console.log("Final Bill:", FinalBill);
console.log("Green Energy Program Eligibility:", GreenEnergyProgramEligibility);

