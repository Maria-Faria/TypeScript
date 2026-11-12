import { Account } from './Account.js';

export class CompanyAccount extends Account {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	getLoan = (): void => {
		console.log('Pegando empréstimo...');
	}

	deposit = (): void => {
		console.log('A empresa está depositando...');
	}
}
