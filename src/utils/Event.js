const Event = function () {
  this.list = {};
};

Event.prototype.add = function (type, fn) {
  if (!this.list[type]) this.list[type] = [];

  this.list[type].push(fn);
};

Event.prototype.remove = function (type, fn) {
  if (!this.list[type]) return;
  if (this.list[type].length === 0) return;

  const _index = this.list[type].findIndex((item) => item === fn);
  this.list[type].splice(_index, 1);
};

Event.prototype.triggle = function (type) {
  if (!this.list[type]) return;

  this.list[type].forEach((itemFn) => {
    itemFn();
  });
};
