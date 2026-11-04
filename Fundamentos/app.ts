const num: number = 18;

if (num > 15) {
  console.log("The number is greater than 15");

}else if (num === 15) {
	console.log("The number is equal to 15");

}else {
	console.log("The number is less than 15");
}

const userType = {
	admin: "Seja bem vindo, Administrador",
	student: "Você é um estudante",
	guest: "Você pode visualizar"
}


function validateUser(user: string) {
	console.log(userType[user as keyof typeof userType]);
}

const user = "admin";

