/**
 * The homeroom teacher receives attendance data for one class at following array.
 * * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Ciara", present: false },
  { name: "Dennis ", present: true },
  { name: "Safira", present: true },
  { name: "Hana", present: false }
];


let presentCount = 0;
let absentCount = 0;
const absentStudents = [];


for (const student of attendances) {
  if (student.present) {
    presentCount++;
  } else {
    absentCount++;
    absentStudents.push(student.name);
  }
}


const totalStudents = attendances.length;
const attendancePercentage = ((presentCount / totalStudents) * 100)


console.log(`Present Students Count: ${presentCount}`);
console.log(`Absent Students Count: ${absentCount}`);
console.log(`Absent Students: ${absentStudents.join(", ")}`);
console.log(`Attendance Percentage: ${attendancePercentage}%`);