// Dom Selectors

const currencyEl_one = document.getElementById('currency-one');
let amountEl_one = document.getElementById('amount-one');
let amountEl_two = document.getElementById('amount-two');
const currencyEl_two = document.getElementById('currency-two');

const rateEl = document.getElementById('rate');
const swapBtn = document.getElementById('swap');

//Fetch exchange rates and update the DOM

function calculateFunction(){
   const curr1Value = currencyEl_one.value;
   const curr2Value = currencyEl_two.value;
  
   fetch(`https://v6.exchangerate-api.com/v6/913b79b39084585b6c45de06/latest/${curr1Value}`)
   .then(res=>res.json())
   .then(data=>{
    // console.log(data);   
    const rates = data.conversion_rates[curr2Value];
    // console.log(rates);
    rateEl.innerHTML=`1 ${curr1Value} = ${rates} ${curr2Value}`;

    amountEl_two.value = (amountEl_one.value * rates ).toFixed(2);
   })
}





//Event listeners
currencyEl_one.addEventListener('change',calculateFunction)
amountEl_one.addEventListener('input',calculateFunction)
amountEl_two.addEventListener('input',calculateFunction)
currencyEl_two.addEventListener('change',calculateFunction)
swapBtn.addEventListener('click',()=>{
    const temp = currencyEl_one.value;
    currencyEl_one.value= currencyEl_two.value;
    currencyEl_two.value = temp;
    calculateFunction();
})

calculateFunction();