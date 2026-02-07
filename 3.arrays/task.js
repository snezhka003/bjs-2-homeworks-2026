function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]); // boolean
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(object => object.gender == gender).map(object => object.age);

  let res;

  if (result.length < 1) {
    return res = 0;
  } else {
    res = result.reduce((a, b) => a + b) / result.length;
  }  

  return res;
}