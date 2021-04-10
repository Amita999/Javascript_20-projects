

    const searcInput = document.getElementById('search'),
submitButton = document.getElementById('submit'),
randomButton = document.getElementById('random'),
mealsEl = document.getElementById('meals'),
resultheadingEl = document.getElementById('result-heading'),
singlemealEl = document.getElementById('single-meal');


//Functions
//Search Meal and fetch from Api
function searchMealFunction(e){
 e.preventDefault();


 //Clear single meal
 singlemealEl.innerHTML = '';

 //Get search term
let term = searcInput.value;
console.log(term);
 // Check for empty
if(term.trim()){
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
.then(res => res.json())
.then(data => {
     console.log(data.meals);

    resultheadingEl.innerHTML = `
    <h2> Search Results for ${term}:</h2>
    `
    if(data.meals ===null){
        resultheadingEl.innerHTML = `
        <h2> There are no search results for ${term}</h2>
        `  
    }
    else{
        // mealsEl.innerHTML =
mealsEl.innerHTML = data.meals
.map(
    meal => 
    `<div class="meal">
    <img src= "${meal.strMealThumb}" alt="${meal.strMeal}" />
    <div class="meal-info" data-mealID="${meal.idMeal}">
      <h3>${meal.strMeal}</h3>
    </div>
  </div>`

)
.join('')
}
})




//Clear the search area
searcInput.value = '';
 }else{
    alert("Please enter search value");
 }
}
//Adding Event listeners

submitButton.addEventListener('submit',searchMealFunction)

