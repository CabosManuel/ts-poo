import { Dog } from './09-protected';

function getValue<type, type2>(value: type) {
  let newValue: type2;
  return value;
}

getValue<number, number>(12).toFixed(); // number
getValue<string, string>('Hello').toUpperCase(); // string
getValue<number[], boolean>([1,2,3]).forEach; // array

const dog = new Dog('Dog', 'Owner'); // class
getValue<Dog, Dog>(dog).bark;
