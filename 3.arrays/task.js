function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]); // boolean
}

function getUsersNamesInAgeRange(users, gender) {
  //  при использовании reduce напрямую в цепочке не получается реализовать правильную проверку на пустой массив и избежать деления на 0, как результат - ошибка тестов с пустыми массивами
// просьба подсказать что я делаю не так в данном подходе.

  /*   let result = users.filter(object => object.gender === gender).map(object => object.age).reduce((acc, item, index, arr) => {
    if (arr.length < 1) {
      return result = 0;
    } else {
      acc += item;

      if (index === arr.length - 1) {
        return acc / arr.length;      
      }

      return acc;
    }
  });

  return result; */

  // при вынесении вычисления среднего арифметического в отдельную переменную получается реализовать проверку на пустой массив,и все тесты, включая пустые массивы, проходят успешно
  
  let result = users.filter(object => object.gender === gender).map(object => object.age);

  let res;

  if (result.length < 1) {
    return res = 0;
  } else {
    res = result.reduce((a, b) => a + b) / result.length;
  }  

  return res;
}