export class MyDate {
  constructor(
    private year: number = 1900,
    private month: number = 1,
    private day: number = 1
  ) {}

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);

    return `${day}/${month}/${this.year}`;
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

const myDate = new MyDate(2000, 3, 12);
console.log("myDate", myDate.printFormat());

const myDate2 = new MyDate();
console.log("myDate2 () -> ", myDate2.printFormat());

const myDate3 = new MyDate(2025);
console.log("myDate3 (2025) ->", myDate3.printFormat());

const myDate4 = new MyDate(2025, 3);
console.log("myDate4 (2025, 3) ->", myDate4.printFormat());

