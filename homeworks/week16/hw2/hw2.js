function Stack() {
  this.arr = [];
  this.push = function (num) {
    this.arr.unshift(num);
  };
  this.pop = function () {
    return this.arr.shift();
  };
}

function Queue() {
  this.arr = [];
  this.push = function (num) {
    this.arr.unshift(num);
  };
  this.pop = function () {
    const popNum = this.arr[this.arr.length - 1];
    this.arr.splice(this.arr.length - 1, 1);
    return popNum;
  };
}

const stack = new Stack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // 5
console.log(stack.pop()); // 10

const queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
