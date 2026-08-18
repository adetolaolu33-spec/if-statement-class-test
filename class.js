
let user = "Admin";
let pass = "TheMaster";

if (user === "Admin") {              // outer if
  if (pass === "TheMaster") {        // nested if
    alert("Welcome!");
  } else {
    alert("Wrong password");
  }

} else {
  alert("I don't know you");
}
