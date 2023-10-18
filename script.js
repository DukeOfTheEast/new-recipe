function showModal(name, ingredients, instructions) {
  var modal = document.getElementById("modal");
  var foodName = document.getElementById("food-name");
  var ingredientList = document.getElementById("ingredients");
  var cookingInstructions = document.getElementById("instructions");

  foodName.textContent = name;
  ingredientList.textContent = ingredients;
  cookingInstructions.textContent = instructions;

  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
