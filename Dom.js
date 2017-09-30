//EXAMINE DOM OBJECT//

// console.log(document.head);
// console.log(document.title);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.all);
// console.log(document.all[13]);
// console.log(document.images);


// EVENTS //

// var heading = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// // header.style.borderBottom = ' 3px solid black ';

// // GETELEMENTSBYCLASS//

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'HEllow 2';
// items[1].style.fontWeight = 'bold';

// for(var i = 0 ; i <items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// qUERY SELECTOR //

// var header = document.querySelector('#main-header');

// header.style.borderBottom = '3px solid red';

// var input = document.querySelector('input');
 
// input.value = ' Add your items';


// var submit = document.querySelector('input[type = "submit"]');
// submit.value = 'Send';

// var items = document.querySelector('.list-group-item');
// items.style.color = 'red';

// var last = document.querySelector('.list-group-item:last-child');
// last.style.color = 'blue';

// var nth = document.querySelector('.list-group-item:nth-child(2)');
// nth.style.color = 'green';



// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');


// for(var i = 0 ; i < odd.length;  i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// var itemsList = document.querySelector('#items');

// // console.log(itemsList.parentNode);
// // itemsList.style.background = 'black';

// console.log(itemsList.firstElementChild);
// itemsList.firstElementChild.style.background = 'black';

// console.log(itemsList.lastElementChild);
// itemsList.lastElementChild.style.background = 'black';

// console.log(itemsList.nth);
// itemsList.firstElementChild.style.background = 'black';

 // Events //

 // var button = document.getElementById('button').addEventListener('click', buttonClick);

 // function buttonClick(e){
 //     //console.log('button click');
    // document.querySelector('.title').textContent = 'TExt Chnages';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';

//    console.log(e.target);
//    console.log(e.target.id);
//    console.log(e.target.className);
//    console.log(e.target.classList);
//    var seen = document.getElementById('output');
//    seen.innerHTML = '<h3>'+e.target.className+'</h3>';


// console.log(e.clientX);
// console.log(e.clientY);
  
//console.log(e.offsetX);

// console.log(e.altKey);

// console.log(e.ctrlKey);

// console.log(e.shiftKey);

// console.log(e.shiftKey);

// }

//var button = document.getElementById('button')
// button.addEventListener('click', eventrun);
// button.addEventListener('dblclick', eventrun);

//button.addEventListener('mousedown', eventrun);
//button.addEventListener('mouseup', eventrun);
var box = document.getElementById('box');
var output = document.getElementById('output');

box.addEventListener('mousemove', eventrun);
//box.addEventListener('mouseleave', eventrun);
//box.addEventListener('mouseup', eventrun);
//box.addEventListener('mousedown', eventrun);
function eventrun(e){

output.innerHTML = '<h3>'+e.offsetX+ '</h3>' + '<br>'+ '<h3>'+e.offsetY+ '</h3>'
box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}