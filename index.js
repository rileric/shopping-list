/*jshint esversion: 6 */


// handle "add item"
/*     <li>
        <span class="shopping-item">---ITEM NAME---</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li> */
function createItemElements( itemName) {

    let preName = '<li><span class="shopping-item">';
    let postName = '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';

    return (preName + itemName + postName); // return block of HTML to append
}

function handleAddItem() {
  $('#js-shopping-list-form').on('submit', event => {

    event.preventDefault();
    const itemName = $(this).find('#shopping-list-entry').val();
    console.log("ItemName = " + itemName); //TODO remove

    let itemToAddString = createItemElements(itemName);
    $('.shopping-list').append(itemToAddString);

});
}

// for each item in list (look for li parent of current target-button)
//     handle check (toggle "shopping-item__checked" class)
function handleCheckButton() {
  $('.shopping-item-toggle').on('click', event => {
    console.log("Check button clicked"); // TODO remove
    let parentListItem = $(this).parent('li');
    let itemName = parentListItem.find('.shopping-item');
   
    itemName.toggle('.shopping-item__checked');
 });
}

//     handle delete (aka remove() which also removes child elements)
function handleDeleteButton() {
  $('.shopping-item-delete').on('click', event => {

    console.log("Delete button clicked"); // TODO remove
    let parentListItem = $(this).parent('li');
    parentListItem.remove();
  });
}

$(function() {

    // handle "add item"
    handleAddItem();

    // handle delete button
    handleDeleteButton();

    // handle check button
    handleCheckButton();
});