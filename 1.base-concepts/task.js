// task1
`use strict`
function solveEquation(a, b, c) {
  let arr;
  let d = b ** 2 - 4 * a * c;
  console.log("дискриминант: " + d);

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
    console.log(arr);
    return arr;

  } else if (d === 0) {
    let x = -b / (2 * a);
    console.log(x);
    arr = [x];
    console.log(arr);
    return arr;
    console.log(arr);


  } else if (d < 0) {
    console.log('корней нет');
    return arr = [];

  }
}
solveEquation(-4, 28, -49);
  return arr; // array


  // task2
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
