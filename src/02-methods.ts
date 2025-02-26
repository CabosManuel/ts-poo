export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1987, 6, 16);
console.log("🚀 ~ myDate.printFormat():", myDate.printFormat());
myDate.add(3, "days");
console.log("🚀 ~ myDate:", myDate.printFormat());
myDate.add(2, "months");
console.log("🚀 ~ myDate:", myDate.printFormat());
console.log("🚀 ~ myDate.day:", myDate.day);
console.log("🚀 ~ myDate.month:", myDate.month);
console.log("🚀 ~ myDate.year:", myDate.year);
