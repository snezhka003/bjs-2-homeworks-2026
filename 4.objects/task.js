function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
/*     if (this.marks === undefined) { 
        return;
    } else {
        this.marks.push(...marksToAdd);
    } */

    if (this.marks !== undefined) { 
        this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined || this.marks.length < 1) {
        return 0;
    } else {
        return this.marks.reduce((acc, item, index, arr) => {
            acc += item;

            if (index === arr.length - 1) {
                return acc / arr.length;
            } else {
                return acc;
            }
        })
    }    
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
