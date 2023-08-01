console.log("Start");

setTimeout(() => console.log("Timeout callback"), 5000);
setImmediate(() => console.log("Immediate callback"), 10000);

console.log("End");

// To fetch the location of browser use windows.location 