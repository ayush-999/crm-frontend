import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import toast, { Toaster } from "react-hot-toast";
import "./Entry.style.css";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
export const Entry = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [frmLoad, setFrmLoad] = useState("login");

   const handleOnChange = (e) => {
      const { name, value } = e.target;

      switch (name) {
         case "email":
            setEmail(value);
            break;
         case "password":
            setPassword(value);
            break;
         default:
            break;
      }
   };

   const handleOnSubmit = (e) => {
      e.preventDefault();

      if (!email || !password) {
         return toast.error("Fill up all the field!");
      }

      // API Call to Submit the form
      console.log(email, password);
   };

   const handleOnResetSubmit = (e) => {
      e.preventDefault();

      if (!email) {
         return toast.error("Please enter the email");
      }

      // API Call to Submit the form
      console.log(email);
   };

   const formSwitcher = (frmType) => {
      setFrmLoad(frmType);
   };

   return (
      <>
         <div className="entry-page">
            <Container>
               <Row>
                  <Col md="4 mx-auto">
                     <div className="custom-jumbotron">
                        {frmLoad === "login" && (
                           <LoginForm
                              handleOnChange={handleOnChange}
                              handleOnSubmit={handleOnSubmit}
                              formSwitcher={formSwitcher}
                              email={email}
                              pass={password}
                           />
                        )}
                        {frmLoad === "rest" && (
                           <ResetPassword
                              handleOnChange={handleOnChange}
                              handleOnResetSubmit={handleOnResetSubmit}
                              formSwitcher={formSwitcher}
                              email={email}
                           />
                        )}
                        <Toaster position="top-center" reverseOrder={false} />
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </>
   );
};
