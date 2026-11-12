//array é uma lista
const array: Array<number> = [1, 2, 3, 4];

const stringArray: string[] = ['a', 'b', 'c'];

//Acessar elementos de um array
console.log(array[0]); //acessa a primeira posição

//saber quantos elementos tem um array
console.log(stringArray.length); //retorna o tamanho do array

//adicionando elementos em um array
console.log("Array original: ", array);
array.push(5); //adiciona um elemento no final do array
console.log("Array após adicionar um elemento: ", array);

//removendo elementos de um array
array.pop(); //remove o último elemento do array
console.log("Array após remover o último elemento: ", array);

//encontrar elementos em um array
const numFind = array.find(num => num === 4); //retorna o primeiro elemento que satisfaz a condição; se não encontrar, retorna undefined
console.log("Elemento encontrado: ", numFind);

array.forEach(num =>{ if (num > 2) {console.log(num)}}); //itera sobre cada elemento do array e executa a função fornecida; pode ser um problema ao usar funções assíncronas, pois não espera a execução da função para continuar a iteração; um pouco mais lento do que o map

array.map(num => console.log(num)); //itera sobre cada elemento do array e 