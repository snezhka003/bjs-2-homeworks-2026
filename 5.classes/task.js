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
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
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
        if (book.state > 30) {
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

        if (deleteBook === -1) {
            return null;
        } else {
            return this.books.splice([deleteBook], 1)[0];
        }
    };
}

// Задача № 3 - решение

class Student {
    constructor(name) {
    this.name = name;
    this.marks = {};
    };

    addMark(mark, subjectName) {
        if (mark > 5 || mark < 2 || typeof mark !== "number") {
            return;
        } else {
            if (this.marks?.[subjectName] === undefined) {
                this.marks[subjectName] = [];
                this.marks[subjectName].push(mark);
            } else {
                this.marks[subjectName].push(mark);
            }
        }
    };

    getAverageBySubject(subjectName) {
        if (this.marks?.[subjectName] === undefined) {
            return 0;
        } else {
            return this.marks[subjectName].reduce((acc, mark) => acc + mark, 0) / this.marks[subjectName].length;
        }
    };

    getAverage() {
        const allSubjects = Object.keys(this.marks);

        if (allSubjects.length < 1) {
            return 0;
        } else {
            return allSubjects.reduce((acc, subject, index, arr) => {
                acc += this.getAverageBySubject(subject);

                if (index === arr.length - 1) {
                    return acc / arr.length;
                } else {
                    return acc;
                }
            }, 0)
        }
    };
}