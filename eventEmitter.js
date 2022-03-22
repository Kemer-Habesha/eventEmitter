// Event Emitter
const EventEmitter = function () {
  this.events = {};
};

EventEmitter.prototype.on = function (event, listener) {
  if (!this.events[event]) {
    this.events[event] = [];
  } else {
    this.events[event] = this.events[event];
  }
  this.events[event].push(listener);
};

EventEmitter.prototype.emit = function (event, data) {
  if (this.events[event]) {
    this.events[event].forEach(function (listener) {
      if (data) {
        listener(data);
      } else {
        listener();
      }
    });
  }
};

module.exports = EventEmitter;
