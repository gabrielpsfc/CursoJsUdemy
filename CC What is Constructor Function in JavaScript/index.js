function Person(name){
    this.name = name
}
// wen you put new in front of a function call, Js do two tings
//1 - create a object inside the function itself end call it this
// const this = {}
//2 - return the object this 
/**
 * function Person(name){
 *  const this = {}
    this.name = name
    retuns this
}
 */
const sina = new Person('Sina')
console.log(sina)

function Person1(name){
    this.name = name
    this.talk = () => `Hello I am ${this.name}`

}

const Qoli = new Person1('Qoli')
console.log(Qoli, Qoli.name, Qoli.talk())
const ben = new Person1('Ben')
const sam = new Person1('Sam')

console.log(sam, ben, sam.name, ben.name, ben.talk(), sam.talk())

function SuperElement(type, content){
    this.el = document.createElement(type)
    this.el.innerText = content
    document.body.append(this.el)
    this.el.addEventListener('click', () => {
        console.log(this.el) 
        const h2 =document.createElement('h2')
        h2.innerText = 'Deu Certo'
        this.el.appendChild(h2)
           
    })
}

const h1 = new SuperElement('h1', 'Hello Word')
console.log(h1)

// this actually runs!


function SuperElementNew(type, content){
    this.el = document.createElement(type)
    this.el.innerText = content
    document.body.append(this.el)
    this.el.addEventListener('click', ()=> 
    console.log(this.el))

}

const array = ['aOK', 'b', 'c']

const myElements = array.map(item => {
    return new SuperElementNew('p', item)
})
console.log(myElements)






