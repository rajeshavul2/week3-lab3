const moreRecipes = [
  { name: "Lasagna", ingredients: ["Pasta", "Tomato Sauce", "Cheese"] },
  { name: "Salad", ingredients: ["Lettuce", "Tomatoes", "Cucumbers"] },
];
moreRecipes.forEach(function (recipe) {
  console.log("Recipe Name: " + recipe.name);
  console.log("Ingredients:");
  
  recipe.ingredients.forEach(function (ingredient) {
    console.log("- " + ingredient);
  });
  
  console.log(); // Add an empty line for separation
});