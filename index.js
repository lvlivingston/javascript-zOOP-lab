// Create a base Animal class that has the following properties: name, species, age, gender

class Animal {
    constructor(name, species, age, gender){
        this.name = name
        this.species = species
        this.age = age
        this.gender = gender  
    }
    
    //Add the following methods:
    //describe -- prints out all information about the animal
    //feed -- prints out "<animalName> is eating"
    //makeSound -- prints out "<animalName> is making a sound"
    //move -- prints out "<animalName> is moving"   
    
    describe() {
        console.log(`This is ${this.name}, a ${this.age} year-old ${this.gender} ${this.species}.`)
    }
    feed() {
        console.log(`${this.name} is eating.`)
    }
    makeSound() {
        console.log(`${this.name} is making a sound.`)
    }
    move() {
        console.log(`${this.name} is moving.`)
    }   
}

//Create the following child class that derives from the base Animal class, adding properties and using method override when needed:
//Mammal -- has a furColor property that is printed out in its description
//i.e. drinks milk when feeding, walks when moving, growls when making a sound

class Mammal extends Animal {
    constructor(name, species, age, gender, furColor){
        super(name, species, age, gender)
        this.furColor = furColor
    }
    describe() {
        console.log(`This is ${this.name}, a ${this.age} year-old ${this.gender} ${this.species} with ${this.furColor} fur.`)
    }
    feed() {
        console.log(`${this.name} likes to drink water.`)
    }
    makeSound() {
        console.log(`${this.name} is growling.`)
    }
    move() {
        console.log(`${this.name} is walking.`)
    }   
}

const tony = new Animal('Tony','tiger','5','male','orange')

//Create additional child classes to populate your zoo!
// Bird -- has a wingspan property that is printed out in its description
// drinks nectar when feeding
// flies when moving
// chirps when making a sound
// Reptile -- has a scaleColor property that is printed out in its description
// eats insects when feeding
// slithers when moving
// hisses when making a sound

class Bird extends Animal {
    constructor(name, species, age, gender, wingspan) {
        super(name, species, age, gender)
        this.wingspan = wingspan
    }
    describe() {
        console.log(`This is ${this.name}, a ${this.age} year-old ${this.gender} ${this.species} with a ${this.wingspan} wingspan.`)
    }
    feed() {
        console.log(`${this.name} is drinking nectar.`)
    }
    makeSound() {
        console.log(`${this.name} is humming.`)
    }
    move() {
        console.log(`${this.name} is flitin' around.`)
    }   
}

class Reptile extends Animal {
    constructor(name, species, age, gender, scaleColor) {
        super(name, species, age, gender)
        this.scaleColor = scaleColor
    }
    describe() {
        console.log(`This is ${this.name}, a ${this.age} year-old ${this.gender} ${this.species} with ${this.scaleColor} scales.`)
    }
    feed() {
        console.log(`${this.name} is munching on mice.`)
    }
    makeSound() {
        console.log(`${this.name} is hissing.`)
    }
    move() {
        console.log(`${this.name} is swimming in the river.`)
    }   
}

const louie = new Mammal('King Louie','orangutan',12,'male','orange')
const flit = new Bird('Flit','hummingbird',2,'female','3 inch')
const ticToc = new Reptile('Tic-Tock','aligator',3,'female','iridescent')

//Confirming above code
// console.log(tony)
// console.log(louie)
// console.log(flit)
// console.log(ticToc)
// tony.describe()
// louie.describe()
// flit.describe()
// ticToc.describe()
// tony.feed()
// louie.feed()
// flit.feed()
// ticToc.feed()
// tony.makeSound()
// louie.makeSound()
// flit.makeSound()
// ticToc.makeSound()
// tony.move()
// louie.move()
// flit.move()
// ticToc.move()

//Create a Zoo class with an animals property that is a list of all of the animals in the zoo. 
//The Zoo class should keep track of all the of the animals in the zoo using an array.
//The Zoo class should have the following methods:
// addAnimal -- adds an animal to the array of animals
// displayAnimals -- displays information for all animals
// feedAnimals -- feeds all animals
// listenToAnimals -- listens to all the animals
// watchAnimals -- watches the animals move around

class Zoo {
    constructor() {
        this.animalsArray = []
    }
    addAnimal(newAnimal) {
        this.animalsArray.push(newAnimal)
        //console.log(this.animalsArray)
    }
    displayAnimals() {
        this.animalsArray.forEach(function(animal) {
            animal.describe()
        })
    }
    feedAnimals() {
        this.animalsArray.forEach(function(animal) {
            animal.feed()
        })
    }
    listenToAnimals() {
        this.animalsArray.forEach(function(animal) {
            animal.makeSound()
        })
    }
    watchAnimals() {
        this.animalsArray.forEach(function(animal) {
            animal.move()
        })
    }
}

const zoolanderZoo = new Zoo()

//Confirming above code
zoolanderZoo.addAnimal(louie)
zoolanderZoo.addAnimal(tony)
zoolanderZoo.addAnimal(flit)
zoolanderZoo.addAnimal(ticToc)
zoolanderZoo.displayAnimals()
zoolanderZoo.feedAnimals()
zoolanderZoo.listenToAnimals()
zoolanderZoo.watchAnimals()