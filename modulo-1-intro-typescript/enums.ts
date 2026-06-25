enum Direction {
  LEFT = "left",
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
}

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

moveToFn(Direction.BOTTOM);
