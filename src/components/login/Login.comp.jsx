import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Login.style.css";
export const LoginForm = ({
   handleOnChange,
   handleOnSubmit,
   formSwitcher,
   email,
   pass,
}) => {
   return (
      <>
         <Card className="login-card shadow-sm">
            <Card.Body>
               <h1 className="text-center fs-2">Client Login</h1>
               <hr />
               <Form autoComplete="off" onSubmit={handleOnSubmit}>
                  <Form.Group>
                     <Form.Label>Email address</Form.Label>
                     <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter email"
                        required
                     />
                  </Form.Group>
                  <Form.Group className="mb-3">
                     <Form.Label>Password</Form.Label>
                     <Form.Control
                        type="password"
                        name="password"
                        value={pass}
                        onChange={handleOnChange}
                        placeholder="Enter password"
                        required
                     />
                  </Form.Group>
                  <div className="d-grid gap-2">
                     <Button variant="success" type="submit">
                        Submit
                     </Button>
                  </div>
               </Form>
               <hr />
               <a href="#!" onClick={()=>formSwitcher('rest')} className="float-end">
                  Forget Password?
               </a>
            </Card.Body>
         </Card>
      </>
   );
};

LoginForm.propTypes = {
   handleOnChange: PropTypes.func.isRequired,
   handleOnSubmit: PropTypes.func.isRequired,
   formSwitcher: PropTypes.func.isRequired,
   email: PropTypes.string.isRequired,
   pass: PropTypes.string.isRequired,
};
