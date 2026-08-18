let user = prompt("Who's there?");

if (user === "Admin") {              // outer if
  let pass = prompt("Enter your password:");

  if (pass === "TheMaster") {        // ← nested if (inside the outer if)
    alert("Welcome!");
  } else {
    alert("Wrong password");
  }

} else {
  alert("I don't know you");
}