
// Example of a callback function
function doSomethingAsync(callback) {
      callback();
  }
  
  function callbackFunction() {
	console.log("Callback function executed");
  }
  
  // Using the callback function
  doSomethingAsync(callbackFunction);