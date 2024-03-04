// Ex 1. Factory Method of Vehicle
abstract class Vehicle {
    abstract start(): string
}

class Car extends Vehicle {
    start(): string {
        return 'Car is running'
    }
}

class Bike extends Vehicle {
    start(): string {
        return 'Bike is running'
    }
}

type VehicleType = 'car' | 'bike'

class VehicleFactory {
    public createVehicle(type: VehicleType):Vehicle{
        switch(type){
            case 'car': return new Car()
            case 'bike': return new Bike()
            default: throw new Error('This type is not supported.')
        }
    }
}

const factory = new VehicleFactory()
const car = factory.createVehicle('car')
const bike = factory.createVehicle('bike')
console.log(`${car.start()} ${bike.start()}`)

// Ex 2. Factory Method of Notification
abstract class Notifications {
    abstract send(message: string): void
}

class EmailNotify extends Notifications {
    send(message: string) {
        console.log(`Email ${message}`)
    }
}

class SMSNotify extends Notifications {
    send(message: string) {
        console.log(`SMS ${message}`)
    }
}

class PushNotify extends Notifications {
    send(message: string) {
        console.log(`Push ${message}`)
    }
}

type NotifyType = 'Email' | 'SMS' | 'Push'

class NotifyFactory {
    createNotify(type: NotifyType): PushNotify | SMSNotify | EmailNotify {
        switch(type){
            case 'Email': return new EmailNotify()
            case 'Push': return new PushNotify()
            case "SMS": return new SMSNotify()
            default: throw new Error('This type is not support for notify factory.')
        }
    }
}
const email = new NotifyFactory()
const sms = new NotifyFactory()
const push = new NotifyFactory()

email.createNotify('Email').send('Hello, World')
push.createNotify('Push').send('Hello, World')
sms.createNotify('SMS').send('Hello, World')