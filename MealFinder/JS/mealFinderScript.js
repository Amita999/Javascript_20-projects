


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

//fetch random meal from API
function randomMEalFunction(){
  //clear meals and headings
  mealsEl.innerHTML = '';
  resultheadingEl.innerHTML = '';
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  .then(res => res.json())
  .then(data =>{
const meal = data.meals[0];
addMealToDOMfunction(meal)
  })
}

//Fetch meal by ID
function getMealByIDFunction(mID){
  console.log("Mid: ",mID);
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mID}`)
  .then(res => res.json())
  .then(data =>{
    const meal = data.meals[0];
    addMealToDOMfunction(meal);
  }
  );
}
//Adding meal to DOM
function addMealToDOMfunction(meal){
const ingredients = [];
 for(let i = 1; i <= 20; i++){
   if(meal[`strIngredient${i}`]){
     ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)

   }else{
     break;
   }

 }
 singlemealEl.innerHTML =`
 <div class="single-meal">
  <h1>${meal.strMeal}</h1>
  <img src = "${meal.strMealThumb}" alt = ${meal.strMeal}/>
    <div class = "single-meal-info">
      ${meal.strCategory ? `<p> ${meal.strCategory}</p>`: '' }
      ${meal.strArea ? `<p> ${meal.strArea}</p>`: '' }
     </div>
 <div class = "main">
 <p>${meal.strInstructions}</p>
 <h2>Ingredients</h2>
 <ul>
${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')} 

 </ul>
 </div>
 </div>`
}

//Adding Event listeners
submitButton.addEventListener('submit',searchMealFunction);
randomButton.addEventListener('click',randomMEalFunction)
mealsEl.addEventListener('click', e =>{
  const mealInfo = e.path.find( item =>
    {
     if(item.classList){
       return item.classList.contains('meal-info')
     }else{
       return false;
     }
    })
    // console.log(mealInfo);
if(mealInfo){
  const mealId = mealInfo.getAttribute('data-mealID');
  console.log(mealId);
  getMealByIDFunction(mealId);
}
})

