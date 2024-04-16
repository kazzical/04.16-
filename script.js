let teamOneName = "Clowns";
let teamTwoName = "Cups";
let scoreOne = 0;
let scoreTwo = 0;
let freeThrow = 1;
let twoPointShot = 2;
let threePointShot = 3;
// DECLARE YOUR VARIABLES HERE








































// DON'T CHANGE THIS CODE


updateTeams();

// Get all buttons
const buttons = document.querySelectorAll('button');

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

function handleButtonClick() {
  const team = this.dataset.team;
  const points = this.className;
  updateScore(team, points);
}

function updateScore(myTeam, myPoints) {
  if (myTeam === "one") {
    if (myPoints === "twoPt") {
      scoreOne += twoPointShot;
    } else if (myPoints === "threePt") {
      scoreOne += threePointShot;
    } else if (myPoints === "freeThrow") {
      scoreOne += freeThrow;
    }
    document.querySelector(".scoreOne").textContent = scoreOne;
  } else if (myTeam === "two") {
    if (myPoints === "twoPt") {
      scoreTwo += twoPointShot;
    } else if (myPoints === "threePt") {
      scoreTwo += threePointShot;
    } else if (myPoints === "freeThrow") {
      scoreTwo += freeThrow;
    }
    document.querySelector(".scoreTwo").textContent = scoreTwo;
  }
}

function updateTeams() {
  document.querySelector(".teamOne").textContent = teamOneName;
  document.querySelector(".teamTwo").textContent = teamTwoName;
}

function updateTeamOneName(newName) {
  teamOneName = newName;
  updateTeams();
}

function updateTeamTwoName(newName) {
  teamTwoName = newName;
  updateTeams();
}