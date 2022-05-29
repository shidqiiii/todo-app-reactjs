import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationBar from "../Components/Navbar";

function Home() {
  return (
    <>
      <NavigationBar />
      <Container className="my-5 text-center">
        <Card bg="dark" text="white">
          <Card.Header>Hello There</Card.Header>
          <Card.Body className="py-5">
            <Card.Title>Welcome to TodoList</Card.Title>
            <Card.Text>Write here, remember then.</Card.Text>
            <Link to="/todo">
              <Button variant="light">Start Write!</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Home;
