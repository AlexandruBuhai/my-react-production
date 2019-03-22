import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  };
  handleSubmit = e => {
    console.log("Hello");

    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  clearList = () => {
    console.log("object");
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items:filteredItems
    })
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem= this.state.items.find(item => item.id = id);

    this.setState({
      item: selectedItem.title,
      items:filteredItems,
      id: selectedItem.id,
      editItem:true
    })
  };

  render() {
    return (
        
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8">
            <h3 className="text-center">
              Welcome, to my Todo App
            </h3>
            <h3 className="text-capitalize text-center">
              <TodoInput 
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              />

            </h3>
              <TodoList items={this.state.items} clearList={this.clearList}
                handleDelete={this.handleDelete} handleEdit={this.handleEdit}
              />
              <a href="https://my-react-todo-project.netlify.com/" className="text-capitalize text-center"> View in production </a>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
