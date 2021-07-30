import React from 'react';

function ListItems(e) {
    const items = e.items;
    const listItems = items.map(item => {
        return <div className="dig" >
                <p>
                <input type="text" id={item.key} value={item.text}  />
                <span>
                <button  onClick={() => { e.deleteItem(item.key) }}>X</button>
                </span>
                </p>
                </div>
    })
    return <div>
         {listItems}
           </div>

}
export default ListItems;