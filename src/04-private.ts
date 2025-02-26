export class MyDate {
  // Atributos privados de la clase, para que no puedan modificarlos
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // Función privada para agregar un 0 a la izquierda
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

const myDate = new MyDate(1987, 6, 6);
console.log(myDate.printFormat());
