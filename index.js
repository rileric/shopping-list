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
    let postName = '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'

    return (preName + itemName + postName); // return block of HTML to append
}

// for each item in list (look for li parent of current target-button)
//     handle check (toggle "shopping-item__checked" class)
//     handle delete (aka remove() which also removes child elements)

$(function() {

    // handle "add item"
    $('#shopping-list-entry').submit( event => {

        event.preventDefault();
        const itemName = $(this).find('#shopping-list-entry').val();

        let itemToAddString = createItemElements(itemName);
        $('.shopping-list').append(itemToAddString);

    })
})