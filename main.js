var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Events listeners ************

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeitem);
filter.addEventListener('keyup', filterItems);

// Add item Function ***********

function addItem(e) {
	
	e.preventDefault();

var newItem = document.getElementById('btnClick').value;

var li = document.createElement('li');
 li.className = 'list-group-item';
 li.appendChild(document.createTextNode(newItem));

 var deletebtn = document.createElement('button');
 deletebtn.className = 'btn btn-danger btn-sm float-right delete';
 deletebtn.appendChild(document.createTextNode('X'));

 li.appendChild(deletebtn);


 itemList.appendChild(li);
} 
// Remove items Funtion  ***********

function removeitem(e){

	if (e.target.classList.contains('delete')){

		if(confirm('Are you sure and want to delete ???')){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}


	};
}

// filtering Item Function ***********


function filterItems(e){
	 var text = e.target.value.toLowerCase();
	 var liItems = itemList.getElementsByTagName('li');

	 Array.from(liItems).forEach( function(serachItems) {
	 	 var itemName = serachItems.firstChild.textContent;

	 	 if (itemName.toLowerCase().indexOf(text) != -1 ) {

	 	 	serachItems.style.display ='block';
	 	 }else {
	 	 	serachItems.style.display ='none';
 	 }
	 });
}











