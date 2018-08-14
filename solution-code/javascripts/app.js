// Rover Object Goes Here
// ======================
var myRover = {
  direction: "N",
  row: 0,    // instead of y
  column: 0, // instead of x
  travelLog: []
};

// ======================
function turnLeft(rover){
  var previousDirection = rover.direction;

  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "N";
      break;
  }

  console.log("Rover is facing " + previousDirection + " and turns right => Rover is now facing " + rover.direction);
}

function turnRight(rover){
  var previousDirection = rover.direction;

  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "N";
      break;
  }

  console.log("Rover is facing " + previousDirection + " and turns right => Rover is now facing " + rover.direction);
}

function moveForward(rover){
  var previousPosition = {
    row: rover.row,
    column: rover.column
  };

  switch (rover.direction) {
    case "N":
      rover.row -= 1;
      break;

    case "E":
      rover.column += 1;
      break;

    case "S":
      rover.row += 1;
      break;

    case "W":
      rover.column -= 1;
      break;
  }

  if (rover.row === -1 || rover.row === 10 ||
      rover.column === -1 || rover.column === 10) {
    rover.row = previousPosition.row;
    rover.column = previousPosition.column;
    console.log("Can't move forward facing " + rover.direction + " off the grid from {row: " + rover.row + ", column: " + rover.column + "}!");
  }
  else {
    rover.travelLog.push(previousPosition);
    console.log("Rover is moving forward facing " + rover.direction + " to {row: " + rover.row + ", column: " + rover.column + "}");
  }
}

function moveBackward(rover){
  var previousPosition = {
    row: rover.row,
    column: rover.column
  };

  switch (rover.direction) {
    case "N":
      rover.row += 1;
      break;

    case "E":
      rover.column -= 1;
      break;

    case "S":
      rover.row -= 1;
      break;

    case "W":
      rover.column += 1;
      break;
  }

  if (rover.row === -1 || rover.row === 10 ||
      rover.column === -1 || rover.column === 10) {
    rover.row = previousPosition.row;
    rover.column = previousPosition.column;
    console.log("Can't move backwards facing " + rover.direction + " off the grid from {row: " + rover.row + ", column: " + rover.column + "}!");
  }
  else {
    rover.travelLog.push(previousPosition);
    console.log("Rover is moving backwards facing " + rover.direction + " to {row: " + rover.row + ", column: " + rover.column + "}");
  }
}

// ======================
var commands = "rfffffffffffffffffffffffffzzzrfflyyyfrfflbbbbbbbbbbbbbbb";

for (var i = 0; i < commands.length; i += 1) {
  switch (commands[i]) {
    case "f":
      moveForward(myRover);
      break;

    case "r":
      turnRight(myRover);
      break;

    case "b":
      moveBackward(myRover);
      break;

    case "l":
      turnLeft(myRover);
      break;

    default:
      console.log("Skipping invalid direction " + commands[i]);
      break;
  }
}

// ======================
console.log("Travel Log:");

for (var i = 0; i < myRover.travelLog.length; i += 1) {
  console.log(myRover.travelLog[i]);
}

console.log("Ended up at {row: " + myRover.row + ", column: " + myRover.column + "}");
