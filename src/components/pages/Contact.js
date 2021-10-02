import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import validator from "validator";

export default function Contact() {
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  // const [hoveredText, setHoveredText] = useState(false);

  function checkValidEmail(e) {
    if (!validator.isEmail(email)) {
      alert("Invalid email");
    }
  }

  const checkText = () => {
    if (hoveredText) {
      setHoveredText(false);
      // alert("Please provide a message");
    }
  };

  // const emailState = (e = {});

  // const validateEmail = (e) => {
  //   var email = e.target.value;

  //   if (validator.isEmail(email)) {
  //     setEmail("Valid Email :)");
  //   } else {
  //     setEmail("Enter valid Email!");
  //   }
  // };

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
          <h2 className="mt-3">
            <a href="mailto:haydenhaun@gmail.com" className="text-purp">
              303-718-1311
            </a>
          </h2>
          <h2 className="mt-1">
            <a href="mailto:haydenhaun@gmail.com" className="text-purp">
              haydenhaun@gmail.com
            </a>
          </h2>
        </div>

        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h5 className="text-purp">
                <strong>Your Email:</strong>
              </h5>
            </Form.Label>
            <div class="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(event) => setEmail(event.target.value)}
                // onSubmit={() => checkValidEmail()}
              />
            </div>

            {/* <Form.Control
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            /> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h5 className="text-purp">
                <strong>Message:</strong>
              </h5>
            </Form.Label>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                onChange={(event) => setMessage(event.target.value)}
                // onMouseEnter={setHoveredText(true)}
                // onMouseLeave={setHoveredText(false)}
              ></textarea>
            </div>
          </Form.Group>
        </Form>
        <Button
          variant="success"
          className="text-purp"
          style={{ width: "15vw" }}
          onClick={(e) => checkValidEmail(e)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
