//Задача № 1 - решение:

function parseCount(value) {
    let number = Number.parseFloat(value, 10);

    if (isNaN(number)) {
        throw new Error ("Невалидное значение");
    }
    
    return number;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

//Задача № 2 - решение:

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

        if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this._perimeter = this.sideA + this.sideB + this.sideC;
    };

    get area() {
        let p = this.perimeter / 2;

        return this._area = +(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3));
    };
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch(error) {
        return {
            get perimeter() {
                return this._perimeter = "Ошибка! Треугольник не существует";
            },        
            get area() {
                return this._area = "Ошибка! Треугольник не существует";
            },
        }
    }         
}
