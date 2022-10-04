let lastvalue1;
let lastvalue2;

function mainans() {
  let variable1 = document.getElementById("question").value;
  let variable2 = document.getElementById("answer").value;
  let mainQuestion = document.getElementById("mainQuestion");
  let mainAnswer = document.getElementById("mainAnswer");
  if (variable1 == variable2) {
    solveEqual(variable1, variable2, mainQuestion, mainAnswer);
  } else if (variable1 == "M") {
    solveM(variable1, variable2, mainQuestion, mainAnswer);
  } else if (variable1 == "KM") {
    solve_km(variable1, variable2, mainQuestion, mainAnswer);
  }
}
function solveM(variable1, variable2, mainQuestion, mainAnswer) {
  if (variable2 == "KM") {
    if (
      mainAnswer.value == 0 ||
      mainAnswer.value == lastvalue1 ||
      mainAnswer.value == lastvalue2
    ) {
      mainAnswer.value = mainQuestion.value / 1000;
      lastvalue1 = mainAnswer.value;
      lastvalue2 = mainQuestion.value;
    } else if (
      mainQuestion.value == 0 ||
      mainQuestion.value == lastvalue1 ||
      mainQuestion.value == lastvalue2
    ) {
      mainQuestion.value = mainAnswer.value * 1000;
      lastvalue1 = mainQuestion.value;
      lastvalue2 = mainAnswer.value;
    }
  } else if (variable2 == "Mile") {
    if (
      mainAnswer.value == 0 ||
      mainAnswer.value == lastvalue1 ||
      mainAnswer.value == lastvalue2
    ) {
      mainAnswer.value = mainQuestion.value / 2.3;
      lastvalue1 = mainAnswer.value;
      lastvalue2 = mainQuestion.value;
    } else if (
      mainQuestion.value == 0 ||
      mainQuestion.value == lastvalue1 ||
      mainQuestion.value == lastvalue2
    ) {
      mainQuestion.value = mainAnswer.value * 2.3;
      lastvalue1 = mainQuestion.value;
      lastvalue2 = mainAnswer.value;
    }
  } else if (variable2 == "Foot") {
    if (
      mainAnswer.value == 0 ||
      mainAnswer.value == lastvalue1 ||
      mainAnswer.value == lastvalue2
    ) {
      mainAnswer.value = mainQuestion.value / 5;
      lastvalue1 = mainAnswer.value;
      lastvalue2 = mainQuestion.value;
    } else if (
      mainQuestion.value == 0 ||
      mainQuestion.value == lastvalue1 ||
      mainQuestion.value == lastvalue2
    ) {
      mainQuestion.value = mainAnswer.value * 5;
      lastvalue1 = mainQuestion.value;
      lastvalue2 = mainAnswer.value;
    }
  } else if (variable2 == "inch") {
    if (
      mainAnswer.value == 0 ||
      mainAnswer.value == lastvalue1 ||
      mainAnswer.value == lastvalue2
    ) {
      mainAnswer.value = mainQuestion.value / 3;
      lastvalue1 = mainAnswer.value;
      lastvalue2 = mainQuestion.value;
    } else if (
      mainQuestion.value == 0 ||
      mainQuestion.value == lastvalue1 ||
      mainQuestion.value == lastvalue2
    ) {
      mainQuestion.value = mainAnswer.value * 3;
      lastvalue1 = mainQuestion.value;
      lastvalue2 = mainAnswer.value;
    }
  }
}

function solveEqual() {
  if (
    mainAnswer.value == 0 ||
    mainAnswer.value == lastvalue1 ||
    mainAnswer.value == lastvalue2
  ) {
    mainAnswer.value = mainQuestion.value;
    lastvalue1 = mainAnswer.value;
    lastvalue2 = mainQuestion.value;
  } else if (
    mainQuestion.value == 0 ||
    mainQuestion.value == lastvalue1 ||
    mainQuestion.value == lastvalue2
  ) {
    mainQuestion.value = mainAnswer.value;
    lastvalue1 = mainQuestion.value;
    lastvalue2 = mainAnswer.value;
  }
}

function solve_km(variable1, variable2, mainQuestion, mainAnswer) {
  if (variable2 == "M") {
    if (
      mainAnswer.value == 0 ||
      mainAnswer.value == lastvalue1 ||
      mainAnswer.value == lastvalue2
    ) {
      mainAnswer.value = mainQuestion.value * 1000;
      lastvalue1 = mainAnswer.value;
      lastvalue2 = mainQuestion.value;
    } else if (
      mainQuestion.value == 0 ||
      mainQuestion.value == lastvalue1 ||
      mainQuestion.value == lastvalue2
    ) {
      mainQuestion.value = mainAnswer.value / 1000;
      lastvalue1 = mainQuestion.value;
      lastvalue2 = mainAnswer.value;
    }
  } else if (variable2 == "Mile") {
    if (
      mainAnswer.value == 0 ||
      mainAnswer.value == lastvalue1 ||
      mainAnswer.value == lastvalue2
    ) {
      mainAnswer.value = (1000 * mainQuestion.value) / 2.3;
      lastvalue1 = mainAnswer.value;
      lastvalue2 = mainQuestion.value;
    } else if (
      mainQuestion.value == 0 ||
      mainQuestion.value == lastvalue1 ||
      mainQuestion.value == lastvalue2
    ) {
      mainQuestion.value = 1000 * mainAnswer.value * 2.3;
      lastvalue1 = mainQuestion.value;
      lastvalue2 = mainAnswer.value;
    }
  } else if (variable2 == "Foot") {
    if (
      mainAnswer.value == 0 ||
      mainAnswer.value == lastvalue1 ||
      mainAnswer.value == lastvalue2
    ) {
      mainAnswer.value = (1000 * mainQuestion.value) / 5;
      lastvalue1 = mainAnswer.value;
      lastvalue2 = mainQuestion.value;
    } else if (
      mainQuestion.value == 0 ||
      mainQuestion.value == lastvalue1 ||
      mainQuestion.value == lastvalue2
    ) {
      mainQuestion.value = 1000 * mainAnswer.value * 5;
      lastvalue1 = mainQuestion.value;
      lastvalue2 = mainAnswer.value;
    }
  } else if (variable2 == "inch") {
    if (
      mainAnswer.value == 0 ||
      mainAnswer.value == lastvalue1 ||
      mainAnswer.value == lastvalue2
    ) {
      mainAnswer.value = (1000 * mainQuestion.value) / 3;
      lastvalue1 = mainAnswer.value;
      lastvalue2 = mainQuestion.value;
    } else if (
      mainQuestion.value == 0 ||
      mainQuestion.value == lastvalue1 ||
      mainQuestion.value == lastvalue2
    ) {
      mainQuestion.value = 1000 * mainAnswer.value * 3;
      lastvalue1 = mainQuestion.value;
      lastvalue2 = mainAnswer.value;
    }
  }
}

function solve_km(variable1, variable2, mainQuestion, mainAnswer) {
  if (variable2 == "M") {
    if (
      mainAnswer.value == 0 ||
      mainAnswer.value == lastvalue1 ||
      mainAnswer.value == lastvalue2
    ) {
      mainAnswer.value = mainQuestion.value * 1000;
      lastvalue1 = mainAnswer.value;
      lastvalue2 = mainQuestion.value;
    } else if (
      mainQuestion.value == 0 ||
      mainQuestion.value == lastvalue1 ||
      mainQuestion.value == lastvalue2
    ) {
      mainQuestion.value = mainAnswer.value / 1000;
      lastvalue1 = mainQuestion.value;
      lastvalue2 = mainAnswer.value;
    }
  } else if (variable2 == "Mile") {
    if (
      mainAnswer.value == 0 ||
      mainAnswer.value == lastvalue1 ||
      mainAnswer.value == lastvalue2
    ) {
      mainAnswer.value = (1000 * mainQuestion.value) / 2.3;
      lastvalue1 = mainAnswer.value;
      lastvalue2 = mainQuestion.value;
    } else if (
      mainQuestion.value == 0 ||
      mainQuestion.value == lastvalue1 ||
      mainQuestion.value == lastvalue2
    ) {
      mainQuestion.value = 1000 * mainAnswer.value * 2.3;
      lastvalue1 = mainQuestion.value;
      lastvalue2 = mainAnswer.value;
    }
  } else if (variable2 == "Foot") {
    if (
      mainAnswer.value == 0 ||
      mainAnswer.value == lastvalue1 ||
      mainAnswer.value == lastvalue2
    ) {
      mainAnswer.value = (1000 * mainQuestion.value) / 5;
      lastvalue1 = mainAnswer.value;
      lastvalue2 = mainQuestion.value;
    } else if (
      mainQuestion.value == 0 ||
      mainQuestion.value == lastvalue1 ||
      mainQuestion.value == lastvalue2
    ) {
      mainQuestion.value = 1000 * mainAnswer.value * 5;
      lastvalue1 = mainQuestion.value;
      lastvalue2 = mainAnswer.value;
    }
  } else if (variable2 == "inch") {
    if (
      mainAnswer.value == 0 ||
      mainAnswer.value == lastvalue1 ||
      mainAnswer.value == lastvalue2
    ) {
      mainAnswer.value = (1000 * mainQuestion.value) / 3;
      lastvalue1 = mainAnswer.value;
      lastvalue2 = mainQuestion.value;
    } else if (
      mainQuestion.value == 0 ||
      mainQuestion.value == lastvalue1 ||
      mainQuestion.value == lastvalue2
    ) {
      mainQuestion.value = 1000 * mainAnswer.value * 3;
      lastvalue1 = mainQuestion.value;
      lastvalue2 = mainAnswer.value;
    }
  }
}
