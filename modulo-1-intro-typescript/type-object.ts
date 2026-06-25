// Type Aliases (type) and Interface

// Type Person = { firstName: string; lastName: string; age?: number };

type UserAuth = {
  email: string;
  password: string;
  token: string;
};

type UserData = {
  firstName: string;
  lastName: string;
  age?: number;
} & UserAuth;

// ------------------------------------------------------------------- //

interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

interface User extends Person {
  email: string;
}

function getfullName(user: Person): string {
  return `${user.firstName} ${user.lastName}`;
}

// Structural Type system -> Sistema de tipo estrutural

const person: User = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

console.log("Full Name:", getfullName(person));
