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


  get month() {
    return this._month;
  }

  set month(newMonth: number) {
    if (newMonth < 1 || newMonth > 12) {
      throw new Error('Invalid month');
    }

    this._month = newMonth;
  }
}

const myDate = new MyDate(2000, 3, 12);
console.log("myDate", myDate.printFormat());

myDate.month = 13; // Error: Invalid month
console.log("🚀 ~ myDate.month:", myDate.month);
myDate.month = 12;
console.log("🚀 ~ myDate.month:", myDate.month);
