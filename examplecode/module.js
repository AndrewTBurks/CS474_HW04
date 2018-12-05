let ModuleExample = function() {
  let self = {
    privateVar1: "test",
    privateVar2: 123,
    publicVar1: "public"
  };

  function privateFunction() {
    console.log("Private Function");
  }

  function publicFunction() {
    console.log("Public Function");
  }

  return {
    var1: self.publicVar1,
    publicFunction
  };
}