const mainEl = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMnBtn = document.getElementById('show-millionaire');
const sortBtn = document.getElementById('sort');
const calculateBtn = document.getElementById('calculate-wealth');


let data = [];
getRandomUserFunction();
getRandomUserFunction();
getRandomUserFunction();
//fetch random user & add money

async function getRandomUserFunction(){
   const res = await fetch("https://randomuser.me/api/");
   const data = await res.json();
   
   const user = data.results[0];
   const newUser={
       name:`${user.name.first} ${user.name.last}`,
       money : Math.floor(Math.random() * 100000 )
   }

   addDataFunction(newUser);

}

function addDataFunction(obj){
    data.push(obj)
    updateDOMFunction();
}

function  updateDOMFunction(pdata = data){
//Clear the main division
mainEl.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
pdata.forEach(item =>{
const people = document.createElement('div');
people.classList.add('person');
people.innerHTML=`<strong>${item.name}</strong> ${formatMoneyFunction(item.money)}`
;
mainEl.appendChild(people);
})
}

//Format money
function formatMoneyFunction(number){
      return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function doubleMoneyFunction(){
     data = data.map((user )=> {
        return { ...user, money:user.money * 2}}
        );
        updateDOMFunction();
}

function sortByWealthFunction(){
    data.sort((a , b) => b.money - a.money);

    updateDOMFunction();
}

function filterMillionaireFunction(){
    data = data.filter((user) => user.money > 1000000);
    updateDOMFunction();
}

function calTotalFunction(){
    const wealth = data.reduce((acc,user)=>
    (acc + user.money),0);

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoneyFunction(wealth)}</strong></h3>`
    mainEl.appendChild(wealthEl);
    // console.log(wealth);
}
 

//Event Listeners
addUserBtn.addEventListener('click',getRandomUserFunction);
doubleBtn.addEventListener('click',doubleMoneyFunction);
sortBtn.addEventListener('click',sortByWealthFunction);
showMnBtn.addEventListener('click',filterMillionaireFunction);
calculateBtn.addEventListener('click',calTotalFunction)