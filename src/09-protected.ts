export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving...');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected run() {
    console.log('Running...');
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }

  bark(times: number) {
    for (let index = 0; index < times; index++) {
      console.log(`Bau! ${this.name}`);
    }

    this.run();
  }

  move() {
    console.log('Moving like a dog...');
    super.move();
  }
}

const dog = new Dog('Fuwawa', 'Yago');
// dog.name = 'Korone';
dog.bark(1);
dog.move();
// dog.run();
