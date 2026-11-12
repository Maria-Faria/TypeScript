export abstract class Account {
	private name: string;
	private readonly accountNumber: number; //pode ser lido, mas não pode ser alterado
	balance: number = 0;
	private status: boolean = true;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	setName = (name: string): void => {
		this.name = name;
		console.log("Nome alterado com sucesso!");
	}

	getName = (): string => {
		return this.name;
	} 

	deposit = (): void => {
		if(this.validateStatus()) {
			console.log('Depositando...');
		}
	}

	withdraw = () => {
		console.log('Sacando...');
	}

	getBalance = (): void => {
		console.log(`Saldo: ${this.balance}`);
	}

	private validateStatus = (): boolean => {
		if (this.status) {
			return this.status;
		}

		throw new Error('Conta inválida!');
	}
}