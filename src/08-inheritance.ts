export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving...');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
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
      console.log("Bau!");
    }
  }
}

const animal = new Animal('Mococo');
animal.move();
console.log(animal.greeting());

const dog = new Dog('Fuwawa', 'Yago');
dog.move();
console.log(dog.greeting());
dog.bark(3);
console.log(dog.owner);
