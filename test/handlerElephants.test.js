const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Deve retornar a contagem correta de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Deve retornar um array de nomes que inclui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Deve retornar uma média de idade próxima a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 1);
  });

  it('Deve retornar undefined se nenhum parâmetro for fornecido', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Deve retornar uma mensagem de erro caso um parâmetro seja inválido', () => {
    expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
