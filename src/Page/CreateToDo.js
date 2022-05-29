import React, { Component } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import NavigationBar from "../Components/Navbar";

class CreateToDo extends Component {
  constructor() {
    super();
    this.state = {
      listTodo: [],
      InputTodo: "",
    };
  }
  render() {
    return (
      <>
        <NavigationBar />
        <Container className="my-5">
          <Card className="mx-auto" bg="dark" text="white" style={{ width: "50rem" }}>
            <Card.Header>To Do List</Card.Header>
            <Card.Body className="mx-3">
              <div className="row">
                <div className="col-10">
                  <Form.Control type="text" placeholder="Write your list here..." />
                </div>
                <div className="col">
                  <Button variant="light" style={{ width: "100%" }}>
                    Add
                  </Button>
                </div>
              </div>

              <div className="list__todo mt-5">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item my-2 d-flex justify-content-between">
                    An item
                    <div className="btn__action">
                      <Button className="btn-sm me-2 rounded-3" variant="success">
                        Edit
                      </Button>
                      <Button className="btn-sm ms-2 rounded-3" variant="danger">
                        Delete
                      </Button>
                    </div>
                  </li>
                  <li class="list-group-item my-2">A second item</li>
                  <li class="list-group-item my-2">A third item</li>
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
