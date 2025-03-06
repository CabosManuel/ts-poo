import { Animal, Dog } from './09-protected';

// const animal = new Animal('Kitty'); // No se puede instanciar una clase abstracta
// animal.greeting();

const dog = new Dog('Fifi', 'Lana'); // Se puede instanciar una clase hija
dog.greeting();
dog.bark(2);
