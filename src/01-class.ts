const date = new Date();
console.log("🚀 ~ date:", date);
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(2025, 1, 26);
console.log("🚀 ~ date2:", date2);
date2.getHours();
date2.getTime();
date2.toISOString();

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(1969, 10, 6);
console.log("🚀 ~ myDate:", myDate);
