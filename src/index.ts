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

/** Dog */
class Dog extends Animal {
  constructor(species: string, age: number, public breed: string) {
    super(species, age) // TypeScript supports classical inheritance like other object-oriented languages.
  }
}

/** Shape */
abstract class Shape {
  abstract getArea(): number // abstract methods must be implemented in the derived classes
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super()
  }

  getArea(): number {
    return this.width * this.height
  }
}

/** IShape */
interface IShape {
  // Interfaces are a way to define contracts within your code as well as contracts with code outside of your project.
  getArea(): number
}

class SecondCircle implements IShape {
  constructor(private radius: number) {}

  getArea(): number {
    return Math.PI * this.radius * this.radius
  }
}

/** Generics */
class DataStorage<T> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data = this.data.filter((d) => d !== item)
  }
}

/** Static */
class MathUtil {
  static pi: number = 3.14159 // These belong to the class itself, not to instances of the class.

  static calculateCircumference(diameter: number): number {
    return this.pi * diameter
  }
}
