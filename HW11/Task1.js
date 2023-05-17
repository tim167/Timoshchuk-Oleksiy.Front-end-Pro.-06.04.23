class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  present() {
    const index = this.attendance.findIndex(function(value) {
      return value === null;
    });

    if (index !== -1) {
      this.attendance[index] = true;
    }
  }

  absent() {
    const index = this.attendance.findIndex(function(value) {
      return value === null;
    });

    if (index !== -1) {
      this.attendance[index] = false;
    }
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  calculateAverageGrade() {
    if (this.grades.length > 0) {
      const sum = this.grades.reduce(function(total, grade) {
        return total + grade;
      }, 0);

      return sum / this.grades.length;
    } else {
      return 0.0;
    }
  }

  calculateAttendancePercentage() {
    const presentCount = this.attendance.filter(function(value) {
      return value === true;
    }).length;

    return presentCount / this.attendance.length;
  }

  summary() {
    const averageGrade = this.calculateAverageGrade();
    const attendancePercentage = this.calculateAttendancePercentage();

    if (averageGrade > 90 && attendancePercentage > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendancePercentage > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Євген", "Вознюк", 2004);
const student2 = new Student("Влад", "Шульженко", 2003);
const student3 = new Student("Олексій", "Кирилович", 2002);

student1.present();
student1.present();
student1.absent();
student2.present();
student3.present();
student3.absent();

const age1 = student1.getAge();
const averageGrade1 = student1.calculateAverageGrade();
const summary1 = student1.summary();

const age2 = student2.getAge();
const averageGrade2 = student2.calculateAverageGrade();
const summary2 = student2.summary();

const age3 = student3.getAge();
const averageGrade3 = student1.calculateAverageGrade();
const summary3 = student1.summary();

console.log(`${student1.firstName} ${student1.lastName} (${age1} років)`);
console.log(`Середній бал: ${averageGrade1}`);
console.log(`Висновок: ${summary1}`);

console.log(`${student2.firstName} ${student2.lastName} (${age2} років)`);
console.log(`Середній бал: ${averageGrade2}`);
console.log(`Висновок: ${summary2}`);

console.log(`${student3.firstName} ${student3.lastName} (${age3} років)`);
console.log(`Середній бал: ${averageGrade3}`);
console.log(`Висновок: ${summary3}`);