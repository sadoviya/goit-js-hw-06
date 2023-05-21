const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  return element;
});

ingredientsRef.append(...elements);
