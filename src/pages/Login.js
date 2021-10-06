//Dependencies
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useHistory} from "react-router-dom"
//Bootstrap
import {Form, Button, Card} from 'react-bootstrap'

const LoginForm = (props) => {
  const history = useHistory();
  const initialValues = {
    email: "",
    password: ""
  };
  async function onSubmit(event) {
    event.preventDefault();

    let loginData = {
      email: formik.values.email,
      password: formik.values.password
    };
    await axios
      .post("http://challenge-react.alkemy.org/", loginData)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token)
        history.push("/")
        console.log(window.localStorage.getItem("token"));
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string().required("Required")
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <div className="formlist">
      <Card>
        <Card.Header>
          <Card.Title>Secret Access</Card.Title>
        </Card.Header>
        .
        <Card.Body>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className="mb-2" controlId={"email"}>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <Form.Text className="text-muted">
                {formik.errors.email && formik.touched.email ? (
                  <div>{formik.errors.email}</div>
                ) : (
                  "We'll never share your email with anyone else."
                )}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId={"password"}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <Form.Text className="text-muted">
                {formik.errors.password && formik.touched.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;

