//OBJETOS
// const user = {
// 	name: 'Maria',
// 	age: 22,
// 	showName() {
// 		console.log(this.name);
// 	}
// }

// console.log(user); //imprime todo o objeto
// console.log(user.name); //imprime apenas o nome
// user.showName(); //imprime apenas o nome, mas usando o método do objeto

// const otherUser = {
// 	name: 'Rosana',
// 	age: 30,
// 	showName() {
// 		console.log(this.name);
// 	}
// }

// otherUser.showName(); //imprime apenas o nome, mas usando o método do objeto

//CLASSES
class User {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name; //this = acessa a propriedade DESTE objeto, ou seja, a propriedade do objeto que está sendo instanciado
		this.age = age;
	}

	showName = () => {
		console.log(this.name);
	}
} //é possível instanciar um objeto a partir de uma classe; uma "forma" para objetos

const user: User = new User('Maria', 22); //chama o construtor da classe User e cria um novo objeto user
user.showName();

const otherUser = new User('Rosana', 30);
otherUser.showName();