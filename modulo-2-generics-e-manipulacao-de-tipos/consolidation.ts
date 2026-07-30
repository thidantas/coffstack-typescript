// "keyof" Type Operator - Produz um novo tipo a partir da união das chaves de um objeto
import { lucas, publication1 } from "./operator-keyof-type/data";
import { User } from "./operator-keyof-type/models";
// const email = lucas["email"];
// console.log(email);

// type UserKey = "firstName" | "lastName" | "email";
function getProperty<T, Key extends keyof T>(value: T, key: Key): T[Key] {
  return value[key];
}

const value = getProperty(publication1, "author");
