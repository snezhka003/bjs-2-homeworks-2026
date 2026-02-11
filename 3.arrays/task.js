function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]); // boolean
}

function getUsersNamesInAgeRange(users, gender) {
// длинный вариант с использованием условия с индексом, как в лекции
    return users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, age, index, arr) => {
        acc += age;

        if (index === arr.length - 1) {
            return acc / arr.length;      
        }

        return acc;
    }, 0);

// короткий вариант без использования условия с индексом
/*     return users.filter(user => user.gender === gender)
        .map(user => user.age)
        .reduce((acc, age, arr) => acc + age / arr.length, 0); */
}