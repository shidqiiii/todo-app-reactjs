import React, { Component } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import ListTodo from "../Components/ListTodo";
import NavigationBar from "../Components/Navbar";

class CreateToDo extends Component {
  constructor() {
    super();
    this.state = {
      onEdit: false,
      listTodo: [],
      currentList: {
        text: "",
        id: 1,
      },
    };
  }

  handleData = () => {
    this.setState({
      currentList: {
        listTodo: this.state.listTodo,
        text: "",
        id: this.state.currentList.id + 1,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.currentList.text !== "") {
      this.setState({
        listTodo: [...this.state.listTodo, this.state.currentList],
      });
    }
    this.handleData();
  };

  handleUpdate = () => {
    this.state.listTodo.map((item) => {
      if (item.id === this.state.currentList.id) {
        item.text = this.state.currentList.text;
        this.setState({
          onEdit: false,
        });
      }
    });
    this.handleData();
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      currentList: {
        text: event.target.value,
        id: this.state.currentList.id,
      },
    });
  };

  handleEdit = (text, id) => {
    console.log(text, id);
    this.setState({
      onEdit: true,
      currentList: {
        text: text,
        id: id,
      },
    });
  };

  handleDelete = (id) => {
    this.setState({
      listTodo: this.state.listTodo.filter((element) => element.id !== id),
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
                <div className="col">
                  <Form.Control type="text" placeholder="Write your list here..." onChange={this.handleChange} value={this.state.currentList.text} />
                </div>
                <div className="col-2">
                  <Button variant="light" style={{ width: "100%" }} onClick={!this.state.onEdit ? this.handleSubmit : this.handleUpdate}>
                    {!this.state.onEdit ? "Add" : "Update"}
                  </Button>
                </div>
              </div>

              <div className="list__todo mt-5">
                <ListTodo listTodo={this.state.listTodo} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
              </div>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default CreateToDo;
