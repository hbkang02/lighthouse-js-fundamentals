const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];


let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

for (var x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}

for (var y = ingredients.length - 1; y >= 0; y--) {
  console.log(ingredients[y]);
}