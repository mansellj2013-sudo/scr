const ingredients = [
  "eggs",
  "milk",
  "cheese",
  "garlic",
  "onion",
  "kale",
  "salt",
  "pepper",
];
let listItems = ingredients
  .map((singleIngredient) => `<li>${singleIngredient}</li>`)
  .join("");
document.getElementById("ingredients").innerHTML = listItems;
