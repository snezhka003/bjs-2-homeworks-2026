"use strict";
function solveEquation(a, b, c) {
  let arr;
  arr = [];

  let d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    arr.push(-b/(2*a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount;

  let credit = amount - contribution;
  let rate = percent/12/100;
  let monthPay = credit * (rate + (rate / (((1 + rate) ** countMonths) - 1)));

  totalAmount = (monthPay * countMonths).toFixed(2);

  return +totalAmount;
}