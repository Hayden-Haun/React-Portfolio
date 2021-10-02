import React, { useState } from "react";
import { FormControl, FormGroup, Form } from "react-bootstrap";
import validator from "validator";

export default function Contact() {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="
    pt-2
    mt-4
    pb-2
    mb-5
    mt-5
    linksContainer
    extraFadeLight
    row
    curvedCorners
    d-flex
    flex-row
    justify-content-center
    align-items-center
    customSizing
    p-4
    pb-5
  "
        id="links"
      >
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <h1>
            <strong>Contact me!</strong>
          </h1>

          <h2 className="mt-3">
            <a href="mailto:haydenhaun@gmail.com" className="text-purp">
              303-718-1311
            </a>
          </h2>
          <h2 className="">
            <a href="mailto:haydenhaun@gmail.com" className="text-purp">
              haydenhaun@gmail.com
            </a>
          </h2>
        </div>

        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h5>
                <strong>Email:</strong>
              </h5>
            </Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h5>
                <strong>Message</strong>
              </h5>
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
