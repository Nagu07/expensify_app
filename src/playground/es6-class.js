class Person
{
    constructor(name='anonymous',age=0)
    {
        this.name = name;
        this.age=age;
    }

    getGreeting()
    {
        return `Hi this is ${this.name}`;
    }
}

class Student extends Person{
    constructor(name,age,major)
    {
        super();
        this.major = major;
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation)
    {
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation()
    {
        return this.homeLocation;
    }

    getGreeting()
    {
        let greet = super.getGreeting();

        if(this.hasHomeLocation())
        {
        greet += `. I am from ${this.homeLocation}`;
        }

        return greet
    }
}

const other = new Traveler('Nagarajan',26);
console.log(other.getGreeting());