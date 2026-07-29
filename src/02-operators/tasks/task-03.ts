/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const EmployeeName : string = "Dimas";
const BasicSalary : number = 5000000;
const OvertimeHours : number =12;
const OvertimeRate  : number =50000;
const  Bonus  : number =3000000;

console.log("Overtime Rate =",OvertimeHours*OvertimeRate);
console.log("bonus =",Bonus );
console.log("Final salary =",(OvertimeRate*OvertimeHours) + BasicSalary + Bonus);



