let ingredients = [],

recipe = {
    title: 'Grilled Cheese',
    ingredients: ["bread", "cheese", "mayo"]
  };

ul = document.createElement('ul');
    document.getElementById('listView').appendChild(ul);

// Render the ingredient list with this function

const renderList = () => {
    console.log(ingredients)
    ul.remove();
    ul = document.createElement('ul');
    document.getElementById('listView').appendChild(ul);
    ingredients.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);
        
        li.innerHTML += item;
        });
}

// Add Ingredient to array

function addIngredient () {
    console.log("add");
    let value = document.getElementById('IngredientInput').value
    if(!value) {
        alert("Please input an ingredient!")
        return
    }
    ingredients.push(value)
    renderList();
}

// Reset function

const reset = () => {
    console.log("reset")
    while(ingredients.length > 0) {
        ingredients.pop();
    }
    document.getElementById('output').innerHTML = ""
    renderList();
}

// Selelction Function

const selectRecipe = () => {
    console.log("selecting")
    for (let i = 0; i < recipe.ingredients.length; i++) {
        if(!(ingredients.includes(recipe.ingredients[i].toLowerCase()))) {
            console.log("Failed")
            document.getElementById('output').innerHTML = `<h1>No recipes foun :(</h1>`
            return false
        } 
    }
    console.log("Success")
    document.getElementById('output').innerHTML = `<h1>${recipe.title}</h1>`
    return true
}
