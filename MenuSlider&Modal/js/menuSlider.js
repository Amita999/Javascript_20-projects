const toggle = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const openBtn = document.getElementById('open');
const modal = document.getElementById('modal');

//Toggle nav
toggle.addEventListener('click',() =>
    document.body.classList.toggle('show-nav')


); 

//Show Modal
openBtn.addEventListener('click',()=>
modal.classList.add('show-modal')
);

//Hide Modal
closeBtn.addEventListener('click',()=>
modal.classList.remove('show-modal'));

window.addEventListener('click',e => e.target ==modal ? modal.classList.remove('show-modal') : false);