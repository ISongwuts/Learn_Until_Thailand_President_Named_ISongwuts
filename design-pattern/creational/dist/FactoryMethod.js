"use strict";
// Ex 1. Factory Method of Vehicle
class Vehicle {
}
class Car extends Vehicle {
    start() {
        return 'Car is running';
    }
}
class Bike extends Vehicle {
    start() {
        return 'Bike is running';
    }
}
class VehicleFactory {
    createVehicle(type) {
        switch (type) {
            case 'car': return new Car();
            case 'bike': return new Bike();
            default: throw new Error('This type is not supported.');
        }
    }
}
const factory = new VehicleFactory();
const car = factory.createVehicle('car');
const bike = factory.createVehicle('bike');
console.log(`${car.start()} ${bike.start()}`);
// Ex 2. Factory Method of Notification
class Notifications {
}
class EmailNotify extends Notifications {
    send(message) {
        console.log(`Email ${message}`);
    }
}
class SMSNotify extends Notifications {
    send(message) {
        console.log(`SMS ${message}`);
    }
}
class PushNotify extends Notifications {
    send(message) {
        console.log(`Push ${message}`);
    }
}
class NotifyFactory {
    createNotify(type) {
        switch (type) {
            case 'Email': return new EmailNotify();
            case 'Push': return new PushNotify();
            case "SMS": return new SMSNotify();
            default: throw new Error('This type is not support for notify factory.');
        }
    }
}
const email = new NotifyFactory();
const sms = new NotifyFactory();
const push = new NotifyFactory();
email.createNotify('Email').send('Hello, World');
push.createNotify('Push').send('Hello, World');
sms.createNotify('SMS').send('Hello, World');
