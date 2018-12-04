var ShapeFactory = (function() {

  return function(options) {
    let self = {
      options
    };

    function create(spec) {
      let { type, ...args } = spec;

      return new self.options[type](args);
    }
  
    return {
      create
    };
  }
}());