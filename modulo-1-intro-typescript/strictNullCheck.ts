// null (nulo) => representa ausência de valor

// undefined (não definido) nem um valor foi atribuido

let value;

console.log(typeof value);

value = null;

console.log(typeof value);

function hello(value: string | null | undefined) {
  if (value) {
    console.log("Hello, " + value.toUpperCase());
  }
}

hello("TypeScript");
hello(null);
