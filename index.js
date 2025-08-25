import readline from "readline";

const astrologySubjects = ["The stars", "Your zodiac sign", "The full moon", "Mercury"];
const astrologyActions = ["will guide", "will challenge", "will illuminate", "will influence"];
const astrologyPlaces = ["your path", "your relationships", "your destiny", "your dreams"];

const motivationalSubjects = ["You", "Your mind", "Your effort", "Your discipline"];
const motivationalActions = ["will achieve", "will conquer", "will overcome", "will inspire"];
const motivationalPlaces = ["success", "greatness", "a better future", "your goals"];

const jokeSubjects = ["A chicken", "My neighbor", "A programmer", "A banana"];
const jokeActions = ["will cross", "will forget", "will eat", "will debug"];
const jokePlaces = ["the road", "the fridge", "the office", "the blender"];

const movieSubjects = ["The Force", "Life", "A hero", "Your destiny"];
const movieActions = ["will awaken", "will find a way", "will rise", "will test you"];
const moviePlaces = ["in a galaxy far, far away", "at Jurassic Park", "inside the Matrix", "on the Titanic"];

function generateMessage(subjects, actions, places) {
  const message = [
    subjects[Math.floor(Math.random() * subjects.length)],
    actions[Math.floor(Math.random() * actions.length)],
    places[Math.floor(Math.random() * places.length)]
  ].join(" ");
  return message;
}



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function showMenu(){
  console.log("\n=== MENU ===");
  console.log("\nCHOSE THE MESSAGE TOPIC")
  console.log("\n1 - astrology")
  console.log("\n2 - motivational")
  console.log("\n3 - jokes")
  console.log("\n4 - movie quotes")
}

function startMenu(){
  let shouldContinue = true;

  const loop = () => {
    showMenu();
    rl.question("Chose: ", (answer) => {
      switch(answer){
        case "1":
          console.log(generateMessage(astrologySubjects, astrologyActions, astrologyPlaces));
          loop();
        case "2":
          console.log(generateMessage(motivationalSubjects, motivationalActions, motivationalPlaces));
          loop();
        case "3":
          console.log(generateMessage(jokeSubjects, jokeActions, jokePlaces));
          loop();
        case "4":
          console.log(generateMessage(movieSubjects, movieActions, moviePlaces));
          loop();
        case "0":
          console.log("exit...");
          shouldContinue = false;
          rl.close();
          return;
        default:
          console.log("Invalid!");
      }
      if (shouldContinue) loop();
    })
  }
}

startMenu();