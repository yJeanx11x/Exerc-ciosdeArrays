// Exercícios de Arrays
// 1. Adicionar e Remover Elementos
// Crie um array de frutas (por exemplo: "maçã", "banana", "laranja").
// Adicione uma nova fruta ao final do array.
// Remova a primeira fruta do array.
// Exiba o array atualizado.

const frutas=['maçã','banana','laranja']
frutas.push('Pera')
frutas.shift()
console.log(frutas)

// 2. Percorrendo um Array
// Crie um array de 5 números.
// Use um loop for para exibir cada número multiplicado por 2.
// Use o método forEach para exibir cada número do array.

const n1=[2,4,6,8,10]
for(let i=0;i<n1.length;i++){
console.log(`${n1[i]*2}`)
}
n1.forEach((n1)=>{
        console.log(n1)
})

// 3. Filtrando e Encontrando Elementos
// Crie um array de números.
// Filtre todos os números maiores que 10.
// Encontre o primeiro número que seja par.

const nu1=[2,8,12,30,50,11,5,9]
const numeromaior10=nu1.filter(valor => valor >=10 )
const primeiroPar=nu1.find((nu1)=>{ return nu1 %2 ==0})
console.log(`Os Numeros maiores que 10 são: ${numeromaior10}`)
console.log(`O primeiro par é ${primeiroPar}`)

// 4. Transformando Arrays
// Crie um array de nomes.
// Use o método map para criar um novo array onde cada nome está em maiúsculas.
// Ordene o array original em ordem alfabética.
// Exercícios de Objetos

const nomes=['Jean','Lucas','Maria','Ela']
const nomesM=nomes.map(valor=>valor.toUpperCase())
const ordenar=nomes.sort()
console.log(nomesM)

// 1. Criar e Acessar Propriedades
// Crie um objeto que represente um carro, com as propriedades: marca, modelo, ano.
// Acesse e exiba o valor da marca e do modelo.
// Atualize o valor do ano para um ano mais recente.

const carro={
        marca:'Toyota',
        modelo:'Corolla',
        ano:2024
}
console.log(`Marca: ${carro.marca}`)
console.log(`Modelo: ${carro.modelo}`)
console.log(`Ano atualizado: ${carro.ano}`)
