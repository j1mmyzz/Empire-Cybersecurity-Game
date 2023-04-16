//checkanswer
let numCorrect = 0;
let previousInput = ""; // Initialize the previous input variable

function checkAnswer() {
  const input = document
    .getElementById("word-input")
    .value.toLowerCase()
    .trim();
  let message = ""; // Initialize the message variable

  if (
    input === "bad grammar" ||
    input === "grammar" ||
    input === "urgency" ||
    input === "sense of urgency" ||
    input === "card issue" ||
    input === "card issues" ||
    input === "card"
  ) {
    if (input === previousInput) {
      message = "You already said that";
    } else {
      console.log("correct");
      numCorrect++;
      previousInput = input;
      document.getElementById("word-input").value = "";
    }
  } else {
    console.log("try again");
    previousInput = "";
    document.getElementById("word-input").value = "";
  }
  if (numCorrect === 3) {
    document.getElementById("success-buttons").style.display = "flex";
    document.getElementById("correct-answers").textContent =
      "You Got Them All!";
    const button = document.getElementById("check-button");
    button.parentNode.removeChild(button);
    const inputField = document.getElementById("word-input");
    inputField.parentNode.removeChild(inputField);
  } else {
    message = message || `${numCorrect} correct`;
    document.getElementById("correct-answers").textContent = message;
  }
  document.getElementById("message").textContent = message; // Update the message element
}

//checkpassword
function checkPassword() {
  // Get the input password
  var password = document.getElementById("newpassword").value;

  // Set up regular expressions for checking password criteria
  var minLength = 10;
  var numberRegex = /\d/;
  var specialRegex = /[!@#$%^&*(),.?":{}|<>]/;

  // Check if the password meets all criteria
  if (
    password.length >= minLength &&
    numberRegex.test(password) &&
    specialRegex.test(password)
  ) {
    document.getElementById("result").textContent = "Password meets criteria";
    document.getElementById("next-button").style.display = "inline";
  } else {
    document.getElementById("result").textContent =
      "Password must be at least 10 characters long, contain at least one number, and at least one special symbol";
    document.getElementById("next-button").style.display = "none";
  }
}

function redirectToStrongPassword() {
  window.location.href = "strongpassword.html";
}
