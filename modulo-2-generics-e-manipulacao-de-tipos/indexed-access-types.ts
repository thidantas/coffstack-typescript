// Indexed Access Types - Acessar uma propriedade específicos em outro tipo

import { publication1 } from "./operator-keyof-type/data";
import { Publication } from "./operator-keyof-type/models";

const author = publication1["author"];
// console.log(author);

type authorType = "author";
type Author = Publication[authorType];

const MyArray = [
  { surname: "Alice", age: 15 },
  { surname: "Bob", age: 23 },
  { surname: "Eve", age: 38 },
];

type Person = (typeof MyArray)[number];

const person: Person = {
  surname: "Lucas",
  age: 34,
};
