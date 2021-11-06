//Add a new item to the list
function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val()
  li.append(inputValue);

  if (inputValue === '') {
    alert("Field may not be blank")
  } else {
    $('#list').append(li)
}

//Crossout an item from the list
function crossOut() {
    li.classList.toggle('strike');
}

li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
});

//Add the delete button "x"
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode("x"));
li.append(crossOutButton);
crossOutButton.on("click", deleteListItem);

//Add class .delete from the css
function deleteListItem() {
    li.addClass("delete")
}

//Reordering the list
$('#list').sortable();
}
