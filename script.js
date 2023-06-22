// TASK
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount, description) {
        this.name = name;
        this.amount = amount;
        this.description = description;
        this.id = Math.floor(Math.random() * 1001);
        this.description = description;
        this.inStock = false;
        this.name = name;
        this.amount = amount;
        this.addedToStock = new Date();
    }
    return Ingredient;
}());
var IngredientsManager = /** @class */ (function () {
    function IngredientsManager() {
        this.ingredients = [];
    }
    IngredientsManager.prototype.addIngredients = function (obj) {
        this.ingredients.push(obj);
    };
    IngredientsManager.prototype.deleteTask = function (id) {
        var indexToDelete = this.ingredients.findIndex(function (ingredients) { return ingredients.id == id; });
        this.ingredients.splice(indexToDelete, 1);
    };
    IngredientsManager.prototype.updateAmount = function (id, newAmount) {
        var indexToUpdate = this.ingredients.findIndex(function (ingredient) { return ingredient.id == id; });
        this.ingredients[indexToUpdate].amount = newAmount;
    };
    IngredientsManager.prototype.updateDescription = function (id, newDescription) {
        var indexToUpdate = this.ingredients.findIndex(function (ingredient) { return ingredient.id == id; });
        this.ingredients[indexToUpdate].description = newDescription;
    };
    IngredientsManager.prototype.completeTask = function (id) {
        var indexToComplete = this.ingredients.findIndex(function (ingredient) { return ingredient.id == id; });
        this.ingredients[indexToComplete].inStock = true;
    };
    return IngredientsManager;
}());
;
var Recipe = /** @class */ (function () {
    function Recipe(name, ingredients, instructions, utensils, prepTime) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.utensils = utensils;
        this.prepTime = prepTime;
        this.id = Math.floor(Math.random() * 1001);
        this.instructions = instructions;
        this.ingredients = ingredients;
        this.utensils = utensils;
        this.prepTime = prepTime;
    }
    return Recipe;
}());
var userAdd = {
    newIngrediant: [],
    newInsturctionList: [],
    newUtencilsList: []
};
var indexToDisplay = 0;
var RecipesManager = /** @class */ (function () {
    function RecipesManager() {
        this.recipes = [
            new Recipe("Chicken Stir Fry", [
                new Ingredient("chicken breast", "2", "sliced"),
                new Ingredient("broccoli", "1 head", "florets"),
                new Ingredient("carrot", "2", "sliced"),
                new Ingredient("bell pepper", "1", "sliced"),
                new Ingredient("garlic", "3 cloves", "minced"),
                new Ingredient("soy sauce", "3 tbsp"),
                new Ingredient("sesame oil", "1 tbsp"),
                new Ingredient("cornstarch", "1 tbsp"),
                new Ingredient("vegetable oil", "2 tbsp"),
                new Ingredient("salt", "to taste"),
                new Ingredient("pepper", "to taste"),
            ], [
                "In a small bowl, mix together soy sauce, sesame oil, and cornstarch.",
                "Heat vegetable oil in a large pan or wok over medium-high heat.",
                "Add chicken and cook until browned.",
                "Add garlic, broccoli, carrot, and bell pepper. Stir fry for 5 minutes.",
                "Pour the soy sauce mixture over the chicken and vegetables.",
                "Cook for an additional 2-3 minutes, until the sauce thickens.",
                "Season with salt and pepper to taste.",
                "Serve hot and enjoy!",
            ], ["pan", "wok", "bowl"], "20 minutes"),
            new Recipe("Vegetable Curry", [
                new Ingredient("onion", "1", "chopped"),
                new Ingredient("garlic", "3 cloves", "minced"),
                new Ingredient("ginger", "1 tbsp", "grated"),
                new Ingredient("potato", "2", "cubed"),
                new Ingredient("carrot", "2", "sliced"),
                new Ingredient("cauliflower", "1/2 head", "florets"),
                new Ingredient("green beans", "1 cup", "trimmed"),
                new Ingredient("coconut milk", "1 can"),
                new Ingredient("curry powder", "2 tbsp"),
                new Ingredient("turmeric", "1 tsp"),
                new Ingredient("salt", "to taste"),
                new Ingredient("pepper", "to taste"),
                new Ingredient("vegetable oil", "2 tbsp"),
            ], [
                "Heat vegetable oil in a large pot over medium heat.",
                "Add onion, garlic, and ginger. Cook until fragrant.",
                "Add potato, carrot, cauliflower, and green beans. Stir fry for 5 minutes.",
                "Add curry powder and turmeric. Stir well to coat the vegetables.",
                "Pour in the coconut milk and bring to a simmer.",
                "Cover and cook for 15-20 minutes, until the vegetables are tender.",
                "Season with salt and pepper to taste.",
                "Serve hot with rice or naan bread.",
            ], ["pot", "spoon", " "], "30 minutes"),
            new Recipe("Spinach and Feta Stuffed Chicken", [
                new Ingredient("chicken breasts", "4"),
                new Ingredient("spinach", "2 cups", "chopped"),
                new Ingredient("feta cheese", "1/2 cup", "crumbled"),
                new Ingredient("garlic", "3 cloves", "minced"),
                new Ingredient("dried oregano", "1 tsp"),
                new Ingredient("lemon juice", "2 tbsp"),
                new Ingredient("olive oil", "2 tbsp"),
                new Ingredient("salt", "to taste"),
                new Ingredient("pepper", "to taste"),
            ], [
                "Preheat the oven to 375°F (190°C).",
                "In a bowl, combine spinach, feta cheese, garlic, dried oregano, lemon juice, olive oil, salt, and pepper.",
                "Make a slit in each chicken breast to create a pocket for the stuffing.",
                "Stuff each chicken breast with the spinach and feta mixture.",
                "Secure the openings with toothpicks.",
                "Season the outside of the chicken breasts with salt and pepper.",
                "Heat olive oil in an oven-safe pan over medium-high heat.",
                "Add the stuffed chicken breasts to the pan and cook until browned on both sides.",
                "Transfer the pan to the preheated oven and bake for 20-25 minutes, until the chicken is cooked through.",
                "Remove the toothpicks before serving.",
            ], ["pan", "bowl", "oven"], "40 minutes"),
            new Recipe("Pancakes", [
                new Ingredient("all-purpose flour", "1 cup"),
                new Ingredient("sugar", "2 tbsp"),
                new Ingredient("baking powder", "2 tsp"),
                new Ingredient("salt", "1/2 tsp"),
                new Ingredient("milk", "1 cup"),
                new Ingredient("egg", "1"),
                new Ingredient("butter", "2 tbsp", "melted"),
                new Ingredient("vanilla extract", "1 tsp"),
            ], [
                "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
                "In a separate bowl, whisk together milk, egg, melted butter, and vanilla extract.",
                "Pour the wet ingredients into the dry ingredients and stir until just combined.",
                "Heat a lightly greased pan or pan over medium-high heat.",
                "Pour 1/4 cup of batter onto the pan for each pancake.",
                "Cook until bubbles form on the surface, then flip and cook until golden brown.",
                "Serve hot with your favorite toppings, such as maple syrup, fresh fruits, or whipped cream.",
            ], ["pan", "bowl", "whisk"], "15 minutes"),
            new Recipe("Mediterranean Pasta Salad", [
                new Ingredient("penne pasta", "8 oz"),
                new Ingredient("cherry tomatoes", "1 cup", "halved"),
                new Ingredient("cucumber", "1/2", "diced"),
                new Ingredient("red onion", "1/4", "sliced"),
                new Ingredient("black olives", "1/2 cup", "sliced"),
                new Ingredient("feta cheese", "1/2 cup", "crumbled"),
                new Ingredient("fresh parsley", "1/4 cup", "chopped"),
                new Ingredient("olive oil", "3 tbsp"),
                new Ingredient("lemon juice", "2 tbsp"),
                new Ingredient("garlic", "2 cloves", "minced"),
                new Ingredient("dried oregano", "1 tsp"),
                new Ingredient("salt", "to taste"),
                new Ingredient("pepper", "to taste"),
            ], [
                "Cook the pasta according to package instructions. Drain and rinse with cold water.",
                "In a large bowl, combine cooked pasta, cherry tomatoes, cucumber, red onion, black olives, feta cheese, and parsley.",
                "In a small bowl, whisk together olive oil, lemon juice, minced garlic, dried oregano, salt, and pepper.",
                "Pour the dressing over the pasta salad and toss to coat evenly.",
                "Adjust seasoning to taste.",
                "Refrigerate for at least 1 hour before serving to allow the flavors to meld together.",
                "Serve chilled as a refreshing side dish or a light meal.",
            ], ["bowl", "pan", " "], "25 minutes"),
            new Recipe("Banana Bread", [
                new Ingredient("ripe bananas", "3"),
                new Ingredient("all-purpose flour", "2 cups"),
                new Ingredient("sugar", "3/4 cup"),
                new Ingredient("butter", "1/2 cup", "softened"),
                new Ingredient("egg", "1"),
                new Ingredient("vanilla extract", "1 tsp"),
                new Ingredient("baking soda", "1 tsp"),
                new Ingredient("salt", "1/2 tsp"),
                new Ingredient("chopped walnuts", "1/2 cup"),
            ], [
                "Preheat the oven to 350°F (175°C). Grease a loaf pan.",
                "In a large bowl, mash the ripe bananas with a fork or potato masher.",
                "Add softened butter, sugar, egg, and vanilla extract. Mix well.",
                "In a separate bowl, whisk together flour, baking soda, and salt.",
                "Gradually add the dry ingredients to the banana mixture, stirring until just combined.",
                "Fold in the chopped walnuts.",
                "Pour the batter into the greased loaf pan.",
                "Bake for 55-60 minutes, or until a toothpick inserted into the center comes out clean.",
                "Allow the banana bread to cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.",
                "Slice and serve. Enjoy!"
            ], ["loaf pan", "bowl", " "], "1 hour 15 minutes")
        ];
    }
    RecipesManager.prototype.addRecipe = function (name, ingredients, instructions, utencils, preptime) {
        this.recipes.push(new Recipe(name, ingredients, instructions, utencils, preptime));
        showRecipes();
    };
    return RecipesManager;
}());
var manager = new IngredientsManager();
var recipesManager = new RecipesManager();
console.log(manager.ingredients);
console.log(recipesManager.recipes);
function showRecipes(specifcIndex) {
    if (specifcIndex) {
        indexToDisplay = specifcIndex;
    }
    console.log(indexToDisplay);
    document.getElementById("myRecipes").innerHTML = " ";
    for (var index = 0; index < recipesManager.recipes[indexToDisplay].utensils.length; index++) {
        if (recipesManager.recipes[indexToDisplay].utensils[index] == null) {
            recipesManager.recipes[indexToDisplay].utensils[index] = " ";
            console.log("undefind");
        }
        console.log(recipesManager.recipes[indexToDisplay].utensils[index]);
    }
    document.getElementById("myRecipes").innerHTML +=
        "<div class=\"card mt-5\">\n                    <div class=\"card-body\" id=\"".concat(recipesManager.recipes[indexToDisplay].id, "\">\n                    <div class=\"row\">\n                    <div class=\"col-6\">\n                      <h5 class=\"card-title\">").concat(recipesManager.recipes[indexToDisplay].name, "</h5></div>\n                      \n                    <div class=\"col-6 d-flex justify-content-end\">\n                    <button class=\"btn btn-outline-danger text-center rounded-5\" style=\" min-height: 40px; max-height: 40px;\n                 id=\"nextButton\" onclick=\"showRecipes()\"><i class=\"fa-solid fa-arrow-right\"></i></button>  </div>\n                      <h6 class=\"d-lg-flex card-subtitle mb-2 text-body-secondary justify-content-between align-items-bottom\">Peparation time : ").concat(recipesManager.recipes[indexToDisplay].prepTime, "\n                        \n                      </h6>\n                        <div class=\"row\" style=\"--bs-gutter-x: 0\">\n                    <div class=\"col-md-4\">\n                    <div class=\"display-6 fs-4 my-3 text-center\"style=\"font-weight:600\">\n                    Instructions\n                  </div>\n                  <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item text-center\"style=\"height:60px; overflow:hidden\">").concat(recipesManager.recipes[indexToDisplay].instructions[0], "</li>\n                    <li class=\"list-group-item text-center\"style=\"height:60px; overflow:hidden\">").concat(recipesManager.recipes[indexToDisplay].instructions[1], "</li>\n                    <li class=\"list-group-item text-center\"style=\"height:60px; overflow:hidden\">").concat(recipesManager.recipes[indexToDisplay].instructions[2], "</li>\n                  </ul>\n                  </div>\n                  <div class=\"col-md-4 d-none d-md-block\">\n                        <div class=\"display-6 fs-4 my-3 text-center\"style=\"font-weight:600\">\n                      Ingrediants\n                    </div>\n                    <ul class=\"list-group list-group-flush\">\n                      <li class=\"list-group-item text-center\"style=\"height:60px; overflow:hidden\">").concat(recipesManager.recipes[indexToDisplay].ingredients[0].name, ", ").concat(recipesManager.recipes[indexToDisplay].ingredients[0].amount, "</li>\n                      <li class=\"list-group-item text-center\"style=\"height:60px; overflow:hidden\">").concat(recipesManager.recipes[indexToDisplay].ingredients[1].name, ", ").concat(recipesManager.recipes[indexToDisplay].ingredients[1].amount, "</li>\n                      <li class=\"list-group-item text-center\"style=\"height:60px; overflow:hidden\">").concat(recipesManager.recipes[indexToDisplay].ingredients[2].name, ", ").concat(recipesManager.recipes[indexToDisplay].ingredients[2].amount, "</li>\n                    </ul>\n                    </div>\n                  <div class=\"col-md-4 d-none d-md-block\">\n                  <div class=\"display-6 fs-4 my-3 text-center\" style=\"font-weight:600\">\n                  Utencils\n                </div>\n                <ul class=\"list-group list-group-flush\">\n                  <li class=\"list-group-item text-center\"style=\"height:60px; overflow:hidden\">").concat(recipesManager.recipes[indexToDisplay].utensils[0], "</li>\n                  <li class=\"list-group-item text-center\"style=\"height:60px; overflow:hidden\">").concat(recipesManager.recipes[indexToDisplay].utensils[1], "</li>\n                  <li class=\"list-group-item text-center\"style=\"height:60px; overflow:hidden\">").concat(recipesManager.recipes[indexToDisplay].utensils[2], "</li>\n                </ul>\n                </div>\n                \n                      <button class=\"card-link btn btn-outline-danger w-100 rounded-3 text-left mt-3\" onclick=\"cookThis('").concat(recipesManager.recipes[indexToDisplay].id, "')\">Lets Cook</button>\n                      </div>\n                      </div>\n                  </div>");
    if (indexToDisplay >= (recipesManager.recipes.length - 1)) {
        return indexToDisplay = 0;
    }
    else
        indexToDisplay++;
}
function showIngredientsInLists() {
    document.getElementById("ingredaintsInStock").innerHTML = "";
    document.getElementById("ingrediantsToBuy").innerHTML = "";
    for (var _i = 0, _a = manager.ingredients; _i < _a.length; _i++) {
        var item = _a[_i];
        if (item.inStock == false) {
            document.getElementById("ingrediantsToBuy").innerHTML += "\n      \n<div class=\"justify-content-center p-2 rounded-3 mb-2 bg-secondary\" style=\"width:45%\"><div class=\"ingredaint-item fs-5 text-center mb-2  text-capitalize\" style=\"height:min-content\">".concat(item.name, ", ").concat(item.amount, "</div> <div style=\"height:min-content\" class=\"d-flex justify-content-around\"> <button class=\"btn btn-warning\" onclick=\"completeTask(").concat(item.id, ")\"><i class=\"fa-solid fa-check\"></i></button><button class=\"btn btn-danger\" onclick=\"deleteTask(").concat(item.id, ")\"><i class=\"fa-solid fa-trash\"></i></button></div></div>\n</div> ");
        }
        else {
            document.getElementById("ingredaintsInStock").innerHTML += "\n      <div class=\"row\"> <li class=\"list-group-item d-inline-block w-50 col-6 align-self-center ingredaint-item text-decoration-line-through\">".concat(item.name, "</li> <span class=\"col-sm-6 d-flex justify-content-center\"> <button class=\"btn btn-success mx-3 my-2\" disabled><i class=\"fa-solid fa-check-double\"></i></button><button class=\"btn btn-danger mx-3 my-2\" disabled><i class=\"fa-solid fa-trash\"></i></button></span> </div> ");
        }
    }
}
function completeTask(id) {
    manager.completeTask(id);
    showIngredientsInLists();
}
function deleteTask(id) {
    if (confirm("Are you sure?")) {
        manager.deleteTask(id);
        showIngredientsInLists();
    }
}
function addNewTask() {
    var name = document.getElementById("newTaskInput").value;
    var newAmount = prompt("Enter new amount:");
    if (newAmount != null || newAmount != "") {
        manager.addIngredients(new Ingredient(name, newAmount));
        showIngredientsInLists();
    }
    else
        alert("Sorry! Something went wrong");
}
function addNewIngrediants() {
    document.getElementById("newRecipeIngrediants").innerHTML = "";
    var ingredaintName = document.getElementById("addIngrediantName").value;
    var ingredaintAmount = document.getElementById("addIngrediantAmount").value;
    if (!ingredaintName || !ingredaintAmount) {
        return alert("add name and amount to craet a new ingredaint");
    }
    userAdd.newIngrediant.push(new Ingredient(ingredaintName, ingredaintAmount));
    for (var _i = 0, _a = userAdd.newIngrediant; _i < _a.length; _i++) {
        var newIngrediant = _a[_i];
        document.getElementById("newRecipeIngrediants").innerHTML +=
            "\n<li class=\"list-group-item d-inline-block\">".concat(newIngrediant.name, ", ").concat(newIngrediant.amount, "</li>\n");
    }
    document.getElementById("addIngrediantName").value = "";
    document.getElementById("addIngrediantAmount").value = "";
    document.getElementById("addIngrediantName").placeholder = "";
    document.getElementById("addIngrediantAmount").placeholder = "";
    console.log(userAdd.newIngrediant);
}
function addNewInstructions() {
    var newInsturction = document.getElementById("addInstructions").value;
    if (!newInsturction) {
        return alert("Please provide a description for the instructions");
    }
    userAdd.newInsturctionList.push(newInsturction);
    document.getElementById("newRecipeInstructions").innerHTML += "\n    <li class=\"list-group-item d-inline-block\">".concat(newInsturction, "</li>\n    ");
    document.getElementById("addInstructions").value = "";
    document.getElementById("addInstructions").placeholder = "";
    console.log(userAdd.newInsturctionList);
}
function addNewUtencil() {
    var newUtencil = document.getElementById("addUtencil").value;
    if (!newUtencil) {
        return alert("Please provide a name for the ustencil");
    }
    userAdd.newUtencilsList.push(newUtencil);
    document.getElementById("newRecipeUtencils").innerHTML += "\n    <li class=\"list-group-item d-inline-block\">".concat(newUtencil, "</li>\n    ");
    document.getElementById("addUtencil").value = "";
    document.getElementById("addUtencil").placeholder = "";
    console.log(newUtencil);
}
function saveNewRecipe() {
    var recipeName = document.getElementById("userRecipeName").value;
    var prepTime = document.getElementById("userPrepTime").value;
    // if (!recipeName) {
    //     return alert("please enter a recipe name")
    // }
    // else if (!prepTime) {
    //     return alert("please enter a preperation time")
    // }
    // else if (!userAdd.newIngrediant || userAdd.newIngrediant.length < 3) {
    //     return alert("please enter a At least 3 ingrediants")
    // }
    // else if (!userAdd.newInsturctionList || userAdd.newInsturctionList.length < 3) {
    //     return alert("please enter a At least 3 instructions")
    // }
    // else if (!userAdd.newUtencilsList || userAdd.newUtencilsList.length < 1) {
    //     return alert("please enter a At least 1 utencils")
    // }
    document.getElementById("closeModal").click();
    recipesManager.addRecipe(recipeName, userAdd.newIngrediant, userAdd.newInsturctionList, userAdd.newUtencilsList, prepTime);
    userAdd.newIngrediant = "",
        userAdd.newInsturctionList = "",
        userAdd.newUtencilsList = "";
    showRecipes(recipesManager.recipes.length - 1);
    document.getElementById("newRecipeIngrediants").innerHTML = "";
    document.getElementById("newRecipeInstructions").innerHTML = "";
    document.getElementById("newRecipeUtencils").innerHTML = "";
}
function cookThis(recipeToCook) {
    var indexToCook = recipesManager.recipes.findIndex(function (recipes) { return recipes.id == recipeToCook; });
    for (var _i = 0, _a = recipesManager.recipes[indexToCook].ingredients; _i < _a.length; _i++) {
        var ingredaint = _a[_i];
        manager.addIngredients(ingredaint);
    }
    showIngredientsInLists();
    document.getElementById("myRecipesSection").innerHTML = "\n    <h1 class=\"text-center mb-5\">Instructions</h1>\n    <ul id=\"instructionsToCook\" class=\"list-group\">\n    </ul>";
    for (var i = 0; i < recipesManager.recipes[indexToCook].instructions.length; i++) {
        document.getElementById("instructionsToCook").innerHTML += "\n        <li class=\"list-group-item bg-info\">\n                <div class=\"row\">\n                <div class=\"col-1 align-self-center\">\n                <input class=\"form-check-input me-1 \" type=\"checkbox\" value=\"\" id=\"".concat(i, "ingrediantToCook\"></div>\n                <div class=\"col-11\"><label class=\"form-check-label stretched-link\" for=\"").concat(i, "ingrediantToCook\">").concat(recipesManager.recipes[indexToCook].instructions[i], "</label>\n                </div>\n                </div>\n                </li>\n            \n        ");
    }
    console.log(manager.ingredients);
}
showIngredientsInLists();
showRecipes();
