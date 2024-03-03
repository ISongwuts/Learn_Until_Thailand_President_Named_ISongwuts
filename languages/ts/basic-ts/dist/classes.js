"use strict";
// Class declaration
class StudentData {
    constructor(name, age, personalID) {
        this.studentID = '42343243244564'; // cannot change the value after this initialized
        this.name = name;
        this.age = age;
        this.personalID = personalID;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
// Object instance declaration
const stu = new StudentData('Songwut', 21, '3242342342');
console.log(`Name: ${stu.getName()}, Age: ${stu.getAge()}`);
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rect = new Rectangle(50, 50);
console.log(rect.getArea());
// Class inheritance: implement
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}
const sq = new Square(50);
console.log(sq.getArea());
