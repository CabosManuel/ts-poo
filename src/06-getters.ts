export class MyDate {
  constructor(
    private _year: number = 1900, // Convención underscore (_) para atributos privados de clases
    private _month: number = 1,
    private _day: number = 1
  ) {}

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`;
  }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);

    return `${day}/${month}/${this._year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this._year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }
}

const myDate = new MyDate(2000, 3, 12);
console.log("myDate", myDate.printFormat());

console.log("🚀 ~ myDate.day:", myDate.day);

const myDate2 = new MyDate(2000, 3, 12);
console.log("🚀 ~ myDate2.isLeapYear (2000):", myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 3, 12);
console.log("🚀 ~ myDate3.isLeapYear (2001):", myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 3, 12);
console.log("🚀 ~ myDate4.isLeapYear (2004):", myDate4.isLeapYear);

