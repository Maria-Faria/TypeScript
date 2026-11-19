import { sum, multiply } from "./sum";

describe('sum', () => {
  it('must add 1 to the number entered', () => {
		const value = sum(1); //valor de teste
		expect(value).toBe(2); //resultado esperado
  })

  it('must multiply the number by two', () => {
    const value = multiply(2, 2);
    expect(value).toBe(4);
  })

  it('must multiply the number by three', () => {
    const value = multiply(2, 3);
    expect(value).toBe(6);
  })

  it('must report an error, with a multiplier other than 2 or 3', () => {
    const value = multiply(2, 4);
    expect(value).toBe('Multiplicador não aceito');
  })
})