import { login } from "./login"

describe('login', () => {
	const mockAlert = jest.fn();
	window.alert = mockAlert;
	it('must display an alert with a welcome', () => {
		login();
		//expect(mockAlert).toBeCalled(); 
		expect(mockAlert).toHaveBeenCalledWith('Bem vindo!');
	})
})