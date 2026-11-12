//DIO BANKING

//name, accountNumber
//deposit, withdraw

import { PeopleAccount } from './class/PeopleAccount.js';
import { CompanyAccount } from './class/CompanyAccount.js';

const peopleAccount: PeopleAccount = new PeopleAccount(123456, 'Maria', 1);
console.log(peopleAccount);
peopleAccount.deposit();

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 2);
companyAccount.deposit();
console.log(companyAccount);
