const dude = {

}
//
dude.name = 'Sina'
dude.age = 34
// function inheritage from proto
console.log(dude.toString)
console.log(dude.valueOf)
// dont mather how you create a obj, that obj will have proto property 
/*const exemplo = {
    __proto__: {... things to be inherited}
}*/
//nearly every object in Js is an instance of Object.create() and inheritage all the stuff that the Object Constructor have on itself
// diferent variables have diferente proto
const myBrothers = ['Ben', 'Sam']
/**myBrother is inheriting from Array that is inheriting from Object
 * __proto__: Array (thigs that only Arrays can access)
 */
const name = 'Sina'
//String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}(thigs that only Strings can access)
//name is inheriting from String end String is inheriting from Object

const humam = {
    kind: 'Human'
}

const sina = Object.create(humam)
sina.age = 34

const ben = Object.create(sina)
ben.age = 12
/**
 * {age: 12}
age <--------- Js will get the first 'age' finded in the proto chain
: 
12
[[Prototype]]
: 
Object
age
: 
34
[[Prototype]]
: 
Object
kind
: 
"Human"
[[Prototype]]
: 
Object
 */

class Human {
    talk(){
        return 'Talking'
    }
}

class SuperHuman extends Human{
    fly(){
        return 'Flying'
    }
}

const Ben = new SuperHuman()

// Prototype property doesnt belong to any object or instance, it only belongs to constructor functions/classes


function Dude (name){ // have prototype property
    this.name = name
}
/* Dude.prototype
{constructor: ƒ}
 */

const eu = new Dude('Gabriel')
// eu dont have prototype
//eu.prototype 
//undefined
//eu.__proto__ === Dude.prototype
//true

Dude.prototype.talk = function(){
    return 'Talking'
}
console.log(eu.talk())
// 'eu' as an instance of Dude(), will inheritage the prototype of Dude in his __proto__, even if i add the method after the creation of 'eu'

// __proto__ is a property of every variable that pointing to the parent object that it´s inheriting from
// prototype is a property on the constructor function that conatins all the stuff that will be inherited by it´s instance
const lietalOBJ = {} // == const lietalOBJ = new Object()
const lieral = new Object() // like an constructor function












