const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  fragment.appendChild(element);
});

ingredientsRef.appendChild(fragment);
