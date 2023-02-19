import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "./PasswordReset.style.css";
export const ResetPassword = ({
   handleOnChange,
   handleOnResetSubmit,
   formSwitcher,
   email,
}) => {
   return (
      <>
         <Card className="login-card shadow-sm">
            <Card.Body>
               <h1 className="text-center fs-2">Reset Password</h1>
               <hr />
               <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                  <Form.Group className="mb-3">
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
                  <div className="d-grid gap-2">
                     <Button variant="success" type="submit">
                        Reset Password
                     </Button>
                  </div>
               </Form>
               <hr />
               <a
                  href="#!"
                  className="float-end"
                  onClick={() => formSwitcher("login")}
               >
                  Login now
               </a>
            </Card.Body>
         </Card>
      </>
   );
};

ResetPassword.propTypes = {
   handleOnChange: PropTypes.func.isRequired,
   handleOnResetSubmit: PropTypes.func.isRequired,
   formSwitcher: PropTypes.func.isRequired,
   email: PropTypes.string.isRequired,
};
