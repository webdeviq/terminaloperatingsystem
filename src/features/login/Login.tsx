import { useNavigate } from "react-router-dom";

import Container from "../../base/form/Container.tsx";
import Form from "../../base/form/Form";
import Input from "../../base/form/Input";
import Button from "../../base/button/Button.tsx";

import { useValidateInput } from "../../util/useValidateInput.ts";
import { useAppDispatch, useAppSelector } from "../../store/index.ts";
import { login } from "../../store/login/loginSlice.ts";
import { Roles } from "../../models/login/login.ts";
import classes from "./Login.module.css";
import { useEffect } from "react";
// import {  getUserLoggedInFromLocalStorage, setLocalStorage } from "./localstorage.ts";

const Login = () => {
  const dispatch = useAppDispatch();
  const userLoginData = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const {
    enteredValue: username,
    enteredValueHasError: usernameHasError,
    enteredValueIsValid: usernameIsValid,
    setValueChangeHandler: usernameChangeHandler,
    setOnBlurHandler: usernameBlurHandler,
    reset: usernameReset,
  } = useValidateInput((value: string) => value.trim().length >= 10);

  const {
    enteredValue: userchosenrole,
    enteredValueHasError: roleHasError,
    enteredValueIsValid: roleIsValid,
    setValueChangeHandler: roleChangeHandler,
    setOnBlurHandler: roleBlurHandler,
    reset: roleReset,
  } = useValidateInput(
    (value: string) =>
      value.trim() === "Planner" ||
      value.trim() === "Operator" ||
      value.trim() === "Management"
  );

  useEffect(() => {
    if (userLoginData.loggedin && userLoginData.role === "Management") {
      navigate("homepage");
    } else if (userLoginData.loggedin && userLoginData.role === "Planner") {
      navigate("/");
    } else if (userLoginData.loggedin && userLoginData.role === "Operator") {
      navigate("/");
    }
  }, [userLoginData, navigate]);

  const usernameClasses = usernameHasError ? classes["invalid"] : "";
  const roleClasses = roleHasError ? classes["invalid"] : "";
  const disableBtn = !roleIsValid || !usernameIsValid;

  const submitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    let role: Roles = null;
    if (userchosenrole === "Operator") {
      role = "Operator";
    } else if (userchosenrole === "Planner") {
      role = "Planner";
    } else {
      role = "Management";
    }
    dispatch(login({ username: username, loggedin: true, role: role }));
    usernameReset();
    roleReset();
  };

  return (
    <section className={classes["login-section"]}>
      <h2>Terminal Operating System</h2>
      <Container externalstyles={classes["login-form-container"]}>
        <Form onSubmit={submitForm}>
          <Input
            externalstyles={usernameClasses}
            labeltext="username"
            element="input"
            type="text"
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            value={username}
          />
          <Input
            externalstyles={roleClasses}
            labeltext="role"
            name="role"
            id="role"
            element="select"
            value={userchosenrole}
            onChange={roleChangeHandler}
            onBlur={roleBlurHandler}
          />
          <Button disabled={disableBtn}>login</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Login;
