const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 19) {
  console.log("You are too young");
} else if (age >= 19 && age <= 50) {
  console.log("You can drink alcohol");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age > 50) {
  console.log("Recommend you not to drink alcohol");
}
