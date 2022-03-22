// EventEmitter
const EventEmitter = require("./eventEmitter");

// Instance
const e = new EventEmitter();

e.on("greet", function (data) {
  console.log(`Hello ${data.name}`);
});

e.emit("greet", { name: "Amsale" });
