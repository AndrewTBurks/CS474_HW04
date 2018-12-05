class Superclass {
  constructor() {}

  myMethod() {
    let classname = this.constructor.name;
    throw new Error(`${classname} must implement myMethod()`);
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
  }
}