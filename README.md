# Classes in TypeScript

Some notes below of confusion I had.

## Abstract classes vs Interfaces

Abstract classes can enforce certain structures like interfaces, but they go further by allowing you to define some implementation details.

Interfaces are purely for enforcing structure. They cannot contain any implementation details.

What do I mean by implementation detail?

Let's look at an example:

```ts
abstract class Animal {
  // Abstract classes can contain constructor
  abstract makeSound(): void

  move(): void {
    console.log('Moving along!') // This is an implementation detail, not possible in an interface
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark!')
  }
}

const myDog = new Dog()
myDog.makeSound() // Outputs: Bark!
myDog.move() // Outputs: Moving along! (inherited from Animal)
```

## Static vs Private

```ts
class Calculator {
  private static readonly pi = 3.14 // Private and static

  static calculateArea(radius: number): number {
    return this.pi * radius * radius // Accessing private static member
  }
}

console.log(Calculator.calculateArea(5)) // Valid, Outputs: 78.5
// console.log(Calculator.pi); // Invalid, pi is private
```

Another thing to mention: Static members cannot be accessed through the class instance. So after you create a new Calculator object, you cannot access the `calculateArea` method through the object.
