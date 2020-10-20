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

    console.log(event.currentTarget);
    console.log(this);
    
    event.preventDefault();
    const itemName = $('#js-shopping-list-form').find('#shopping-list-entry').val();

    let itemToAddString = createItemElements(itemName);
    $('.shopping-list').append(itemToAddString);

});
}

// for each item in list (look for li parent of current target-button)
//     handle check (toggle "shopping-item__checked" class)
//     handle delete (aka remove() which also removes child elements)
$(function() {

    // handle "add item"
    handleAddItem();

    // handle delete button
    $('ul').on('click', '.shopping-item-delete', event => {

      let parentListItem = $(event.currentTarget).parent().parent(); // button > div .shopping-item-controls > li
      parentListItem.remove();
    });

    // handle check button
    $('ul').on('click', '.shopping-item-toggle', event => {

      let parentListItem = $(event.currentTarget).parent().parent(); // button > div .shopping-item-controls > li
      let itemName = parentListItem.find('.shopping-item');
     
      itemName.toggleClass('shopping-item__checked');
   });
});