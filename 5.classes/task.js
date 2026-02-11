// Задача № 1 - решение

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    };

    set state(state) {
        if(state < 0) {
            this._state = 0;
        } else if(state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    };

    get state() {
        return this._state;
    };
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задача № 2 - решение

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    };

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) ? this.books.find(book => book[type] === value) : null;

        // либо через сохранение поиска в переменную:
        // search = this.books.find(book => book[type] === value);

        // return search ? search : null;
    };

    giveBookByName(bookName) {
        let deleteBook = this.books.findIndex(book => book.name === bookName);

        if(deleteBook === -1) {
            return null;
        } else {
            return this.books.splice([deleteBook], 1)[0];
        }
    };
}

// Задача № 3 - решение

class Student {
    constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
    }

    addMark(mark, subjectName) {
        if (this.marks.subject !== subjectName) {
            this.marks = {
                subjectName: []
            };
        } else if (mark > 5 || mark < 2 || typeof mark !== "number") {
            return;
        } else {
            let index = this.marks.findIndex(item => item.subject === subjectName);

            if (index !== -1) {
                this.marks[index].marks.push(mark);
            } else {
            this.marks.push({
                subject: subjectName,
                marks: [mark]
            });
            };
        }
    };

    getAverageBySubject(subjectName) {
        let index = this.marks.findIndex(item => item.subject === subjectName);

        if (index === -1) {
            return "Несуществующий предмет";
        } else {
            return this.marks[index].marks.reduce((acc, item) => acc + item, 0) / this.marks[index].marks.length;
        }
    };

    getAverage() {
        let allMarks = [];
        this.marks.forEach(item => allMarks.push(...item.marks));
        return allMarks.reduce((acc, item) => acc + item, 0) / allMarks.length;
    };
}