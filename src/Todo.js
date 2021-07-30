import React from 'react'
import ListItems from './ListItems'

class Todo extends React.Component {
    constructor() {
              super();
              this.state = {
                   items: [],
                   currentItem: {
                    text: '',
                    key: ''
            }
        }
        this.addItem = this.addItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
       
    }
    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== "") {
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }
    handleInput(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Math.random(),
            }
        })
    }
    deleteItem(key){
        const filteredItems= this.state.items.filter(item =>
          item.key!==key);
          this.setState({
          items: filteredItems
        })
    
      }

    render() {
        return (
            <div className="sdf">
           
                    <form onSubmit={this.addItem}>
                        <input type="text" placeholder="Enter work to do" value={this.state.currentItem.text} onChange={this.handleInput}></input>
                        <button type="submit">Add</button>
                    </form>
                    <h1>Todo List</h1>
                    <p>{this.state.items.text}</p>
                  
          
                    <ListItems items={this.state.items} deleteItem={this.deleteItem}  />

            
            </div>
        );
    }
}
export default Todo;

