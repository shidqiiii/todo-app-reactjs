import React, { Component } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import NavigationBar from "../Components/Navbar";

class CreateToDo extends Component {
  constructor() {
    super();
    this.state = {
      listTodo: [
        { text: "Satu", key: 1 },
        { text: "Dua", key: 2 },
      ],
      currentList: {
        text: "",
        key: 1,
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      currentList: {
        text: "",
        key: this.index++,
      },
      listTodo: [...this.state.listTodo, this.state.currentList],
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      currentList: {
        text: event.target.value,
        key: this.index,
      },
    });
  };

  handleEdit = (event) => {
    event.preventDefault();
    this.setState({});
  };

  handleDelete = (element) => {
    console.log(element);
  };

  render() {
    return (
      <>
        {/* {console.log(this.state.listTodo)} */}
        <NavigationBar />
        <Container className="my-5 ">
          <Card className="mx-auto" bg="dark" text="white" style={{ maxWidth: "50rem" }}>
            <Card.Header className="text-center fw-bolder">To Do List</Card.Header>
            <Card.Body className="mx-3">
              <div className="row">
                <div className="col">
                  <Form.Control type="text" placeholder="Write your list here..." onChange={this.handleChange} value={this.state.InputTodo} />
                </div>
                <div className="col-2">
                  <Button variant="light" style={{ width: "100%" }} onClick={this.handleSubmit}>
                    Add
                  </Button>
                </div>
              </div>

              <div className="list__todo mt-5">
                <ul className="list-group list-group-flush" style={{ width: "100%" }}>
                  {this.state.listTodo.map((element) => {
                    return (
                      <li className="list-group-item my-2 d-flex justify-content-between" key={element.key}>
                        {element.text}
                        <div className="btn__action">
                          <Button className="btn-sm me-2 rounded-3" variant="success">
                            Edit
                          </Button>
                          <Button className="btn-sm ms-2 rounded-3" variant="danger" onClick={this.handleDelete}>
                            Delete
                          </Button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default CreateToDo;
