class Accessors {
  constructor() {
    this._value1 = "initial";
    this._value2 = 123;
  }

  getVal1() {
    return this._value1;
  }

  setVal1(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError("Requires type 'string'");
    }

    this._value1 = newValue;
  }
}