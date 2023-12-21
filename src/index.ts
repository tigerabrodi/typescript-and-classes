/** Person */
class Person {
  // Types defined here of `this` (not needed)
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

/** Employee */
class Employee {
  public employeeId: number // accessible from anywhere
  private salary: number // accessible only from inside the class
  protected department: string // accessible from inside the class and subclasses

  constructor(employeeId: number, salary: number, department: string) {
    this.employeeId = employeeId
    this.salary = salary
    this.department = department
  }
}

/** Animal */
class Animal {
  constructor(public species: string, private age: number) {} // shorthand for defining properties

  getAnimalInfo(): string {
    return `${this.species} is ${this.age} years old.`
  }
}

/** Circle */
class Circle {
  readonly pi: number = 3.14 // readonly properties must be initialized at their declaration or in the constructor.
  constructor(public radius: number) {}
}
