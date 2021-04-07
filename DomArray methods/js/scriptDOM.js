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
       money : Math.floor(Math.random() * 1000000 )
   }

   addDataFunction(newUser);
}

function addDataFunction(obj){
    data.push(obj)
}