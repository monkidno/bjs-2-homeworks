// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  min = arr[0];
  max = arr[0];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = (sum / arr.length);

  return {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2))
  };
}

getArrayParams([1, 2, 3, -100, 10]);

// Задание 2
function worker(arr) {

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

worker([1, 2, 3, 4]);

function makeWork(arrOfArr, func) {

  let max = 0;

  for (let j = 0; j < arrOfArr.length; j++) {
    result = func(arrOfArr[j]);

    if (result > max) {
      max = result;
    }
  }
  return max;
}

makeWork([
  [10, 10, 11],
  [20, 10]
], worker);

makeWork([
  [-10, -20, -40],
  [10, 20, 30]
], worker2);


// Задание 3
function worker2(arr) {

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return Math.abs(max - min);
}

worker2([-10, -2, 3, 4]);
