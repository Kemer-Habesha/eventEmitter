const Emitter = require("events");

const e = new Emitter();

e.on("hey", function (data) {
  console.log(`Hello ${data}`);
});

e.on("hey", function () {
  console.log("Another hey");
});

e.emit("hey", "Amsale");
