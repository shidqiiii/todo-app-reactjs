import React from "react";
import { Button, Form } from "react-bootstrap";

function FormInput(props) {
    return (
        <>
            <div className="col">
                <Form.Control type="text" placeholder="Write your list here..." onChange={props.handleChange} value={props.input} />
            </div>
            <div className="col-2">
                <Button variant="light" style={{ width: "100%" }} onClick={props.handleSubmit}>
                    {props.isEdit ? "Update" : "Add"}
                </Button>
            </div>
        </>
    );
}

export default FormInput;
