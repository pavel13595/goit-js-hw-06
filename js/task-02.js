const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = ingredients.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  listItem.classList.add("item");
  return listItem;
});
const listEl = document.querySelector("#ingredients");
listEl.style.color = "teal";
listEl.style.fontSize = "42px";
listEl.style.listStyleType = "none";
listEl.style.textAlign = "center";
listEl.append(...ingredientsListEl);
