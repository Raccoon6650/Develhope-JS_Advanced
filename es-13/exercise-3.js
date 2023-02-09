const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const log = function (value) {
  console.log(value);
}

sum_arrow = (a,b) => a + b
subtract_arrow = (a,b) => a - b
multiply_arrow = (a,b) => a * b
divide_arrow = (a,b) => a / b
log_arrow = (value) => console.log(value)

//value = divide_arrow (subtract_arrow(multiply_arrow (sum_arrow(2+4) * sum_arrow(5+2))-2)/5)

//let arrowSum = () => 5+5;

//console.log (arrowSum());
log_arrow(divide_arrow(subtract_arrow (multiply_arrow(sum_arrow (2,4), sum_arrow (5,2)) ,2) ,5))