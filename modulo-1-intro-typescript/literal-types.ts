// Tipos Literais - Literal Types
// Uma variável pode fazer parte de umc onjunto específico de string ou number
// exemplo: Direction => left, top, right, and bottom

type Direction = "left" | "top" | "right" | "bottom";

// const value: Direction = 'top'

function moveToFn(direction: Direction) {
  switch (direction) {
    case "left":
      console.log("move to left");
      break;
    case "right":
      console.log("move to right");
      break;
    case "top":
      console.log("move to top");
      break;
    case "bottom":
      console.log("move to bottom");
      break;

    default:
      console.log("I don't know where to go :(");
  }
}

moveToFn("bottom");

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

declare function handleRequest(url: string, method: HttpMethod): void;

const req: {
  url: string;
  method: HttpMethod;
} = { url: "https://api.example.com/data", method: "GET" };

handleRequest(req.url, req.method);
