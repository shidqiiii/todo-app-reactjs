import React from "react";
import { Button } from "react-bootstrap";

function ListTodo(props) {
  const listItem = props.items.map((item, index) => {
    return (
      <li className="list-group-item my-2 d-flex justify-content-between " key={index}>
        {item}
        <div className="btn__action">
          <Button className="btn-sm me-2 rounded-3" variant="success" value={index} onClick={props.handleEdit}>
            Edit
          </Button>
          <Button className="btn-sm ms-2 rounded-3" variant="danger" value={index} onClick={props.handleDelete}>
            Delete
          </Button>
        </div>
      </li>
    );
  });

  return (
    <>
      <ul className="list-group list-group-flush" style={{ width: "100%" }}>
        {listItem}
      </ul>
    </>
  );
}

export default ListTodo;
