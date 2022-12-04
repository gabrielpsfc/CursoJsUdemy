//Escreva uma função cahamda ePaisagem que recebe dois argumentos, largua e altura de uma imagem(number). Retorne true se a imagem estiver em modo paisagem

const ePaisagem = (Largura, Altura) => Largura > Altura ? `Modo Paisagem ${true}` : `Modo Retrato ${false}`

console.log(ePaisagem(15,16))