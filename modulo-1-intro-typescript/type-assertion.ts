/**
 * Afirmaçôes de tipo - Type Assertions
 * palavra "as" - "como"
 *
 * Às vezes, você terá informaçôes sobre o
 * tipo de um valor que o typescript nâo consegue conhecer
 */

type Person = {
  firstName: string;
  lastName: string;
  email: string;
  address: {
    zipCode: string;
  };
};

const value = { firstName: "Lucas" } as Person; // recomendo usarem o "as"

// const value = <Person>{}

// 1 - algo acontece em tempo de execução ou fator externo

// 2 - criando mocks para testes automatizados

console.log(value.firstName);
