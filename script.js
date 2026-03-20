const affirmations = [
  "I am courageous",
  "I am strong",
  "I am Powerful",
  "You are capable",
  "You are learning every day",
  "You belong in tech",
];
const nightAffirmations = [
  "I will wake up the best version of myself!",
  "Who I am tonight is a beautiful reflection of my strength through the day! ",
  "Job well done today  I was a leader  in every rooom I walked in.",
];
//name the div (where the text will appear ) for the night afirmations
const nightAffirmationsSection = document.getElementById(
  "nightAffirmationsSection"
);
const affirmationSection = document.getElementById("affirmationSection");

function generateNightAffirmation() {
  //randomize throught the night affirmations
  //gerate random nuber through the array(IDNEX) between numbers 0-2 using math. random
  let nightRandomNumber = Math.floor(Math.random() * nightAffirmations.length);
  //use the random number as the index of the array of affirimations
  let nightAffirmation = nightAffirmations[nightRandomNumber];
  nightAffirmationsSection.innerHTML = nightAffirmation;
  return nightAffirmation;
}
//nigt time affirmation generator button using document.getElementById grabbing button from html
let nightAffirmationButton = document.getElementById("nightAfiirmationbutton");

nightAffirmationButton.addEventListener("click", (evt) => {
  generateNightAffirmation();
});

function generateAffirmation() {
  //randomize through  the array( affirmations ) above
  // Generate random number between 0-2 using math.random
  let randomNumber = Math.floor(Math.random() * affirmations.length);
  // use the the random number as the index of the array of affirmations
  let affirmation = affirmations[randomNumber];
  // return affirmation
  affirmationSection.innerHTML = affirmation;
  return affirmation;
}

let generateButton = document.getElementById("generate");

generateButton.addEventListener("click", (evt) => {
  generateAffirmation();
});

//created togglge button in html : have the day time affirmation show the day time
//  text but have the night time option show the night time text .(updateplaceholder)
let isDay = true;
const diyAffirmationInput = document.getElementById("diyAffirmationInput");
function placeHolderChanges() {
  //grab the input elemnt from html and use the document.getElementbyId().placeholder to change the vaule
  isDay = !isDay;
  if (dropdown.value === "Night time love") {
    diyAffirmationInput.placeholder = "Night Affirmations here";
  } else {
    diyAffirmationInput.placeholder = "Day Affirmations here";
  }
}

//grab the drop down menu from html
let dropdown = document.getElementById("affirmationDropDown");

//I want the placeHoldeChange to happen when the drop down menu from html night love is selected
dropdown.addEventListener("change", (evt) => {
  placeHolderChanges();
});
let addButton = document.getElementById("addAffirmation");

const addAffirmation = (evt) => {
  //Get the text from the input
  let inputValue = diyAffirmationInput.value;
  if (!inputValue) {
    console.log("empty");
    return;
  }
  //Check dropdown (day or night)
  if (dropdown.value === "Day time power") {
    affirmations.push(inputValue);
    affirmationSection.innerHTML = inputValue;
  } else {
    nightAffirmations.push(inputValue);
    nightAffirmationsSection.innerHTML = inputValue;
  }
  //Add it to the correct array
  console.log(inputValue);

  //Clear the input

  diyAffirmationInput.value = "";
  console.log("after clear", inputValue);
};
addButton.addEventListener("click", addAffirmation);

const themeSelector = document.getElementById("themeSelector");

themeSelector.addEventListener("change", () => {
  document.body.className = themeSelector.value;
});
