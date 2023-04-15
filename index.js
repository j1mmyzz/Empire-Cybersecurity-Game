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

var animationEnd =
  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

class Random {
  static generateBinary() {
    var random = Math.random();
    if (random > 0.5) {
      return 1;
    } else {
      return 0;
    }
  }

  static generate(min, max) {
    return Math.floor(Math.random() * max + min);
  }
}

class Binary {
  constructor() {
    this.value = Random.generateBinary();
  }

  animate(ts, leftOffset, topOffset) {
    var div = document.createElement("div");
    $(div).css("font-size", ts + "px");
    $(div).css("top", topOffset * (ts / 2));
    $(div).css("left", leftOffset + "px");
    $(div).text(this.value);
    $(div).addClass("binary");
    $(div).hide();
    $("body").append(div);
    $(div).show().addClass("animated fadeIn").on(animationEnd, this.fadeInEnd);
    return $(div).offset().top;
  }

  fadeInEnd(event) {
    var $binary = $(event.currentTarget);
    $binary.removeClass("animated fadeIn");
    $binary.addClass("animated fadeOut").on(animationEnd, function () {
      $binary.remove();
    });
  }
}

class BinaryLine {
  constructor(lO, tS, dS) {
    this.leftOffset = lO;
    this.textSize = tS;
    this.documentSize = dS;
  }

  generate() {
    var iterator = 1;
    var size = this.length;
    var fontSize = this.textSize;
    var documentSize = this.documentSize;
    var currentOffset = 0;
    var leftOffset = this.leftOffset;
    var interval = setInterval(function () {
      if (currentOffset < documentSize) {
        var binary = new Binary();
        currentOffset = binary.animate(fontSize, leftOffset, iterator);
        iterator++;
      } else {
        clearInterval(interval);
      }
    }, 80);
  }
}

class BinaryAnimation {
  constructor() {}

  start() {
    setInterval(function () {
      new BinaryLine(
        Random.generate(0, $(document).width()),
        Random.generate(
          $(document).width() * 0.002,
          $(document).width() * 0.008
        ),
        $(document).height()
      ).generate();
    }, 400);

    setInterval(function () {
      $(".binary").remove();
    }, 30000);
  }
}

new BinaryAnimation().start();
