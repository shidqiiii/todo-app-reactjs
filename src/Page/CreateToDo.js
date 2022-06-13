import React, { Component } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import FormInput from "../Components/FormInput";
import ListTodo from "../Components/ListTodo";
import NavigationBar from "../Components/Navbar";

class CreateToDo extends Component {
  constructor() {
    super();
    this.state = {
      isEdit: false,
      items: ["Coba 1", "Coba 2", "Coba 3"],
      input: "",
      currentIndex: -1,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newItem = this.state.items;
    let checkInput = this.state.input.trim();

    if (this.state.currentIndex === -1 && checkInput !== "") {
      newItem = [...this.state.items, checkInput];
    } else {
      newItem[this.state.currentIndex] = checkInput;
    }

    this.setState({
      items: newItem,
      input: "",
      currentIndex: -1,
      isEdit: false,
    });
  };

  handleEdit = (e) => {
    let editIndex = this.state.items[e.target.value];
    this.setState({
      isEdit: true,
      input: editIndex,
      currentIndex: e.target.value,
    });
  };

  handleDelete = (e) => {
    let deleteIndex = this.state.items[e.target.value];
    let newItems = [];
    this.state.items.filter((element) => {
      if (deleteIndex !== element) {
        return newItems.push(element);
      } else {
        return newItems;
      }
    });

    this.setState({
      items: newItems,
    });
  };

  render() {
    return (
      <>
        <NavigationBar />
        <Container className="my-5 ">
          <Card className="mx-auto" bg="dark" text="white" style={{ maxWidth: "50rem" }}>
            <Card.Header className="text-center fw-bolder">To Do List</Card.Header>
            <Card.Body className="mx-3">
              <div className="row">
                <FormInput items={this.state.items} input={this.state.input} isEdit={this.state.isEdit} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
              </div>

              <div className="list__todo mt-5">
                <ListTodo items={this.state.items} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
              </div>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default CreateToDo;
