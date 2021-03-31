const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = parseInt(movieSelect.value);
console.log(ticketPrice);

function updateSelectedCountfunction(){
   const selectedSeats = document.querySelectorAll('.row .seat.selected');
//    console.log(selectedSeats);
const selectedSeatsCount = selectedSeats.length;
// console.log(selectedSeatsCount);
count.innerText = selectedSeatsCount;
total.innerText = selectedSeatsCount * ticketPrice;
}

//Movie Select
movieSelect.addEventListener('change',(e)=>{
    ticketPrice=e.target.value;
    updateSelectedCountfunction();
})




//Seat select 
container.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('seat')&&
    !e.target.classList.contains('occupied')){
        console.log(e.target);
        e.target.classList.toggle('selected');
        //update the total number of seats and price
        updateSelectedCountfunction();
    }

})