// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesEl = document.querySelector("#categories");
const amountCategoriesEl = categoriesEl.children.length;
console.log(`Number of categories: ${amountCategoriesEl}`);

[...categoriesEl.children].forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const amountEl = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${amountEl}`);
});
