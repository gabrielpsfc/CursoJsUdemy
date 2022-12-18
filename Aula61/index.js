function* geradora1(){
    // c
    yield 'Valor 1'
    // c
    yield 'Valor 2'
    // c
    yield 'Valor 3'
}

const g1 = geradora1()
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next())
//=================

function* geradora2(){
    // c
    yield 'Valor 1'
    // c
    yield 'Valor 2'
    // c
    yield 'Valor 3'
}
const g11 = geradora2()
for (let valor of g11){
    console.log(valor)
}

//=====================

function* geradora3(){
    let i  = 0
    while(true){
        yield i
        i++
    }

}

const g2 = geradora3()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)

//=======================

function* geradora4(){
    yield 0
    yield 1
    yield 2
}

function* geradora5(){
    yield* geradora4()
    yield 3
    yield 4
    yield 5
}


const g4 = geradora5()
for(let valor of g4){
    console.log(valor)
}

function* geradora6(){
    yield function(){
        console.log('Vim do y1')
    }

    yield function(){
        console.log('Vim do return')
    }

    yield function(){
        console.log('Vim do y2')
    }

    yield function(){
        console.log('Vim do y3')
    }


}

const g5 = geradora6()
const func1 = g5.next().value
const func2 = g5.next().value
const func3 = g5.next().value
func1()
func2()
func3()
