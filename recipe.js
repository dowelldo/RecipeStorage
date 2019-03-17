function validateForm() {
    var name = document.forms["ingredientsForm"]["recipeName"].value;
    var ingarr = name + "," + document.forms["ingredientsForm"]["ingredients"].value;
    var recipe = ingarr.split(",");
    for (r in recipe) {
        recipe[r] = recipe[r].trim();
    }
    alert(recipe);
}