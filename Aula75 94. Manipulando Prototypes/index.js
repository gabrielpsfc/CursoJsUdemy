//new Object -> Object.prototype
//bjA.__proto__ === Object.prototype

const objA = {
    chaveA: 'A'
    //  __proto__ : Object.prototype
}

const objB = {
    chaveB: 'B'
    //  __proto__ : objA

}

const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objB.chaveA)
console.log(objC.chaveA)
console.log(objC.chaveB)


console.log(Object.getPrototypeOf(objA))

// add metodo in prototype
// colocar métodos no seu 
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function (percen) {
    this.preco = this.preco - (this.preco * (percen / 100))
}

Produto.prototype.aumento = function (percen) {
    this.preco = this.preco * (1 + (percen / 100))
}

const p1 = new Produto('Camiseta', 50)

p1.aumento(100)
p1.desconto(100)
console.log(p1)

//literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)
console.log(p2.preco)
p2.aumento(20)
console.log(p2.preco)


const p3 = Object.create(Object.prototype)
console.log(p3)
const p4 = Object.create(Produto.prototype)
p4.preco = 50
p4.aumento(50)
console.log(p4.preco)
const p5 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    }
})
p5.aumento(10)
console.log(p5)



/**
 * {chaveC: 'C'}
chaveC
: 
"C"
[[Prototype]]
: 
Object
chaveB
: 
"B"
[[Prototype]]
: 
Object
chaveA
: 
"A"
[[Prototype]]
: 
Object
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()
 */


var twoSum = function (nums, target) {
    for (let i in nums) {
        if (i >= 1)
            console.log(nums[i] + nums[i - 1])
        if (nums[i] + nums[i - 1] == target) {
            return [i - 1, Number(i)]
        }
    }
}


var twoSum1 = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                if (i !== j) {
                    return [i, j];
                }
            }
        }
    }
}


var twoSum2 = function (nums, target) {
    var j = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[j] == target) {
            return [i, j]
        } else {
            j++
        }
    }
}


var twoSum3 = function (nums, target) {
    for (let i in nums) {
        for (let j in nums) {
            if (nums[i] + nums[j] === target && i != j) {
                return [i, j]
            }

        }
    }

}


var twoSum4 = function(nums, target) {
    const hash = {};
    for ( let i = 0; i < nums.length; i++ ) {
      let diff = target - nums[i];
      console.log(target - nums[i])
      console.log(hash[diff], nums[i])
      if ( typeof hash[diff] != 'undefined' && hash[diff] !== i ) {
        return ( [hash[diff], i] );
      } else {
        hash[nums[i]] = i;
      }
    }
    return [];
  };



console.log(twoSum([3, 2, 3], 6))
console.log(twoSum1([3, 2, 3], 6))
console.log(twoSum2([3, 2, 3], 6))
console.log(twoSum3([3, 2, 3], 6))
twoSum4([3, 2, 3], 6)