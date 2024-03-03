// Partial Utility
interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

// Required Utility
interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};

/*
    Record Utility
    Record is a shortcut to defining an object type with a specific key type and value type.
*/
const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};

// Omit Utility
interface Person {
    name: string;
    age: number;
    location?: string;
}
const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};

// Pick Utility
const bob_2: Pick<Person, 'name'> = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

// Exclude Utility
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.