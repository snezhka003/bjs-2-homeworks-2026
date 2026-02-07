function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];  
    } else if (arr[i] < min) {
      min = arr[i];
    };

    sum += arr[i];
  }

    // подход из п. 4
/*   const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); */

  const avg = +((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  if (arr.length < 1) {
    return sum;
  } else {
    sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let difference = 0;

  if (arr.length < 1) {
    return difference;
  } else {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    difference = Math.abs(max - min);
  }
  
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  if (arr.length < 1) {
    return sumEvenElement - sumOddElement;
  } else {
    arr.forEach(el => {
      if (el % 2 === 0) {
          sumEvenElement += el;
      } else {
          sumOddElement += el;
      }
    });
  }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result = 0;
  
  if (arr.length < 1) {
    return result;
  } else {
    arr.forEach(el => {
      if (el % 2 === 0) {
          sumEvenElement += el;
          countEvenElement++;
      }
    });
  }

  return result = sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const sum = func(...arrOfArr[i]);

    if (sum > maxWorkerResult) {
      maxWorkerResult = sum;
    }
  }
  
  return maxWorkerResult;
}
