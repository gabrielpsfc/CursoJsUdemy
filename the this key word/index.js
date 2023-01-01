
console.log(this)
//{}
console.log(typeof (this))
//object
console.log(this.value)
// undefined
if (true) {
    console.log(this)
}

function talk() {
    return this
}

const me = {
    name: 'Sina',
    talk
}

console.log(me.talk())
console.log(me.name)
console.log(me.talk)
console.log(talk())

console.log(talk())
// ao usar chamar a função talk com a const me, a função talk irá retornar o a const me, pois this irá se referir a const me
// this se refere ao lado esquerdo de (me.talk())

//function talk() {
//    return `I am ${this.name}`
//}
const you = {
    name: 'Qoli',
    talk: talk
}
/**
 * me.talk()
 */

console.log(me.talk())
console.log(you.talk())
// this passa a ser o objeto que está chamando a função
/**
 * const you = {
    name: 'Qoli',
    talk: talk
}

function talk(){
    return this
}

you.talk()
this = you
this assume o valor de do objeto que achama a função que contem this

function talk(){
    return `I am ${this.name}`
}
you.talk()
function talk(){
    return `I am ${you*.name}`
}
me.talk()
function talk(){
    return `I am ${me*.name}`
}
 */


const me1 = {
    name: 'Sina'
}

console.log(talk.bind(me1))
//ƒ talk(){
//    return `I am ${this.name}`
//}
// this = me1

//Function.prototype.bind
const meTalk = talk.bind(me1) //[Function: bound talk]
console.log(meTalk)
console.log(meTalk())
// meTalk é uma função que retorna talk com me1 como this
const youTalk = talk.bind(you)
console.log(youTalk)
console.log(youTalk())
// youTalk é um função que retorna a função talk com o obj you como this
console.dir(talk.bind(me1)())// invoção direta
console.log(talk.bind(you)())
console.log(talk.call(me1))


function talk1(lang) {
    if (lang == 'en') {
        return `I am ${this.name}`
    } else if (lang == 'it') {
        return `Io sono ${this.name}`
    }
}

const me2 = {
    name: 'Sina'
}
//  talk = função
//  call = função( objeto = this dentro da função talk, array[parametros da função que chama call])
console.log(talk1.call(me2, 'it'))
console.log(talk1.call(me2, 'en'))


function talk2(lang, isPolite) {
    if (isPolite) {

        if (lang == 'en') {
            return `Hello, i am ${this.name}`
        } else if (lang == 'it') {
            return `Ciao bella, Sono ${this.name}`
        }
    }
    if (!isPolite) {
        if (lang == 'en') {
            return `zap ${this.name}`
        } else if (lang == 'it') {
            return `Italian noises ${this.name}`
        }

    }
}

const Iam = {
    name: 'Dude'
}
// função talk2 chama call com o objeto Iam como primeiro parametro, seguido por array que em ordem left right são parametros para a função talk2
// this = Iam

/**
 * const Iam = {
    name: 'Dude'
}
 * console.log(talk2.call(Iam, 'it', isPolite = false))
 *function talk2(lang, isPolite) {
 * function talk2(it, false) {
    if (isPolite) {

        if (lang == 'en') {
            return `Hello, i am ${Iam.name}`
        } else if (lang == 'it') {
            return `Ciao bella, Sono ${Iam.name}`
        }
    }
    if (!isPolite) {
        if (lang == 'en') {
            return `zap ${Iam.name}`
        } else if (lang == 'it') {
            return `Italian noises ${Iam.name}`
        }

    }
}

const Iam = {
    name: 'Dude'
}
 * 
 */
console.log(talk2.call(Iam, 'it', isPolite = false))

const myFunction = function (a, b, c) {
    return `the parametres are :a = ${a}, b = ${b}, c=${c}
    and the this (obj) is ${this.name}, ${this.age}, ${this.id} `
}

function MyConstrucFunction(name, id, age) {
    
        this.name = name,
        this.id = id,
        this.age = age

}
// in this case i using call

const OBJ = {
    name: 'Gabriel',
    id: '04744430198',
    age: '47',
    myFunction,
    talk
}
const myOBJ = new MyConstrucFunction('Gabriel', '04744430198', '47')
console.log(myOBJ)

console.log(myFunction.call(myOBJ, 'Aa', 'Bb', 'Cc'))
console.log(myFunction.apply(OBJ,['abc', 'bcd', 'cde']))

/**
 * function talk() {
    return this
}

const me = {
    name: 'Sina',
    talk
}
 */


// on this case i insert the function on my obj so i dont need use call()

console.log(OBJ.talk())
console.log(OBJ.myFunction('abc', 'bcd', 'cde'))

const obj1 = new MyConstrucFunction('Rafael', '04744430198', '48')

console.log(obj1)
console.log(myOBJ)


function Person(n){
    this.name = n
    this.talk = function(){
        console.log(this)
    }
    setTimeout( function(){
        console.log(this)
    }, 1000)
}


const mySelf = new Person('Sina')
//Person { name: 'Sina' } = this
console.log(me.talk())
const newMySelf = new Person('SinaNew')

// if there is callback function in te constructor function the 'this' on those function will not refer to te 'this' on the constructor function, to fix that problem you can pass bind outside the {} whith the this as parametre:
function Person1(n){
    this.name = n
    this.talk = function(){
        console.log(this)
    }
    setTimeout( function(){
        console.log(this)
    }.bind(this), 1000)
}

const mySelfAgain = new Person1('Gabriel')
console.log(mySelfAgain)

// the other way to fix that is using arrow function on the callback function

function Person2(n){
    this.name = n
    this.talk = function(){
        console.log(this)
    }
    setTimeout( ()=>{
        console.log(this)
    }, 1000)
}

const mySelfOtherTime = new Person2('Eliane')
console.log(mySelfOtherTime)








