export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('Creating new instance');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const service = MyService.create('Service 1');
console.log("🚀 ~ service:", service.getName());

const service2 = MyService.create('Service 2');
console.log("🚀 ~ service2:", service2.getName());

const service3 = MyService.create('Service 3');
console.log("🚀 ~ service3:", service3.getName());

console.log(service === service2); // true

