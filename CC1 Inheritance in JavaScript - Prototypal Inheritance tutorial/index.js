// 1 - Inheritance
const me = {
    get talk() {
        return 'Talking through hand made object me'
    }
}

const you = {
    get talk() {
        return 'Talking through hand made object you'
    }
}

console.log(you.talk)
console.log(me.talk)

//---------------------/
//Solving duplication problem
class Person {
    talk (){
        return 'Talk through class'
    }
}

let meClass = new Person()
let youClass = new Person()
console.log(meClass.talk())
console.log(youClass.talk())
meClass.age = 12

//-----------------------
// Updating function problem

Person.prototype.talk = function(){
    return 'improved talking'
}

console.log(meClass.talk(), youClass.talk())
//-----------------------
// in Js inheritance is made through prototype obj

function PersonProto(){

}
PersonProto.prototype.talk = function (){
    return 'Talking through function added in the prototype of the function PersonProto'
}
const meProto = new PersonProto()
console.log(meProto.talk())

//-----------------------
//*Constructor function

function PersonConstruction (){
    this.talk = function (){
        return 'Talking through Construction function'
    }
}

let meConstruc = new PersonConstruction()
console.log(meConstruc.talk())

//-----------------------
// if you add a function on the constructor will be regarded as a property (string, boll, number), en will be past to the childObjects/instances created, this inplyes that if you need to change the function you will need do it in every childObjects/instances created
// if you add to the prototype will be considered to be a method

function PersonInheritage (){
    this.age =12    
}

let meInheritage = new PersonInheritage()
console.log(meInheritage.age)
PersonInheritage.age = 40
console.log(PersonInheritage.age)
console.log(meInheritage.age)

//-----------------------
// if you create a new object whit a construction function, this object will receve the property values of the construction function, however, if you change the property values in the construction function, the instances created will not receve this new values

// is commom to add al the properties inside the constructor end add all the mathods in the prototype of the constructor/class function

function PersonCommomUsed (age, name, gender){
    // propertys/ thing you have
    this.age = age
    this.name = name 
    this.gender = gender
}
 // methods/ behaviors/ thing you can do
PersonCommomUsed.prototype.run = function (){
    return `${this.name} with the gender ${this.gender} and age ${this.age} can run  `
}

PersonCommomUsed.prototype.talk = function (){
    return `${this.name} with the gender ${this.gender} and age ${this.age} can talk  `
}

PersonCommomUsed.prototype.talk = function (){
    return `${this.name} with the gender ${this.gender} and age ${this.age} can walk  `
}

PersonCommomUsed.prototype.talk = function (){
    return `${this.name} with the gender ${this.gender} and age ${this.age} can smile  `
}

//-----------------------
// Extending  behavior

class PersonExtendingbehavior{
    talk(){
        return 'Extending behavior talk'
    }
}

const meExtendingbehavior = new PersonExtendingbehavior()
console.log(meExtendingbehavior.talk())

class classPerson extends PersonExtendingbehavior {
    fly(){
        return 'Flying'
    }
}

const youClassPerson = new classPerson()
console.log(youClassPerson.fly(), ' ', youClassPerson.talk())
// meExtendingbehavior dont have fly()


//------------------------------
// inheritage through objects


const personObj = {
    talk(){
        return 'talking personObj'
    }
}

const meOBJ = Object.create(personObj)
console.log(personObj.talk())
console.log(meOBJ.talk())

// another way 

const personObjPrototypeInheritage = {
    talk (){
        return 'talking through personObjPrototypeInheritage'
    }
}

const mePrototypeInheritage = {}

// the obj who will recive Inheritage prototype / the obj who will conced Inheritage prototype
Object.setPrototypeOf(mePrototypeInheritage, personObjPrototypeInheritage )

console.log(mePrototypeInheritage.talk())
console.log(personObjPrototypeInheritage.talk())


























