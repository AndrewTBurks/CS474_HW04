"use strict";

var ShapeFactory = (function() {
  return function(options) {
    // save the options in the private "self" object
    let self = {
      options
    };

    // method to create a Shape subclass from the object "spec"
    function create(spec) {
      // destructure the spec into the type of object and remaining args
      let { type, ...args } = spec;

      // create and return a new shape by "type" with "args"
      return new self.options[type](args);
    }
  
    // return public create method
    return {
      create
    };
  }
}());