// Class declaration
class StudentData {
    private personalID?: string
    private name?: string
    private age?: number
    private readonly studentID: string = '42343243244564' // cannot change the value after this initialized

    public constructor(name: string, age: number, personalID: string) {
        this.name = name
        this.age = age
        this.personalID = personalID
    }

    public getName() {
        return this.name
    }

    public getAge() {
        return this.age
    }
}

// Object instance declaration
const stu = new StudentData('Songwut', 21, '3242342342')
console.log(`Name: ${stu.getName()}, Age: ${stu.getAge()}`)

// Class inheritance: implement
interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(50, 50)
console.log(rect.getArea())

// Class inheritance: implement
class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }

    // getArea gets inherited from Rectangle
}
const sq = new Square(50)
console.log(sq.getArea())