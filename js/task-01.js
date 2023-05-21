const categoriesItemsRef = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesItemsRef.length);

categoriesItemsRef.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
