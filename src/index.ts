class Person {
  /** Types defined here of `this` */
  name: string
  age: number

  // you must define the types of the arguments too
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet(): string {
    return `Hello, my name is ${this.name}`
  }
}
