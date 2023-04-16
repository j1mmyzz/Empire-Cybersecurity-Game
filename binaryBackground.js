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
