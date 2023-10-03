// console.log('zoop 🐼')
class Animal {
    constructor(name, species, age, gender) {
        this.name = name
        this.species = species
        this.age = age
        this.gender = gender
    }

    //describe
    describe() {
        console.log(`This is ${this.species} is named ${this.name}. They ${this.age} year-old ${this.gender}!`)
    }
    //feed
    feed() {
        console.log(`${this.name} is eating.`)

    }
    //make sound
    makeSound() {
        console.log(`${this.name} is making a sound.`)
    }
    //move
    move() {
        console.log(`${this.name} is moving.`)
    }
}

const tony = new Animal('Tony', 'tiger', '5', 'best boy');

//Tests
console.log(tony)
tony.describe()
tony.feed()
tony.makeSound()
tony.move()

class Mammal extends Animal {
    constructor(name, species, age, gender, furColor) {
        this.furColor = furColor
    }
    
    //describe
    describe() {
        console.log(`This is ${this.species} is named ${this.name}. They ${this.age} year-old ${this.gender}!`)
    }
    //feed
    feed() {
        console.log(`${this.name} is eating.`)

    }
    //make sound
    makeSound() {
        console.log(`${this.name} is making a sound.`)
    }
    //move
    move() {
        console.log(`${this.name} is moving.`)
    }
}

const louis = new Mammal('King Louis', 'orangutang', '12', 'King of the Jungle', 'orange') )

console.log(tony)
louis.describe()
louis.feed()
louis.makeSound()
louis.move()