import React, { useContext } from "react";
import { characterContext } from "../context/CharacterContext";

//Dependencies
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
//CSS
import { Container, Form, Button } from "react-bootstrap/";

const SearchHeroes = (props) => {
  const { searchResults, setSearchResults } = useContext(characterContext);

  const initialValues = {
    search: "",
  };

  async function onSubmit(event) {
    event.preventDefault();
    await axios
      .get(
        `https://superheroapi.com/api.php/10159877164994744/search/${formik.values.search}`
      )
      .then((response) => {
        if (response.data.results) {
          setSearchResults(response.data.results);
        } else {
          setSearchResults(["none"]);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  const validationSchema = Yup.object({
    search: Yup.string(),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Container className="pt-3 d-flex flex-column align-items-center justify-content-center">
      <h1>Find Your Allies!</h1>
      <Form onSubmit={(e) => onSubmit(e)} className="d-flex flex-column">
        <Form.Group controlId={"search"}>
          <Form.Control
            type="search"
            placeholder="Choose Your Characters!"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.search}
            className="mb-3 mt-2 vw-30"
          />
        </Form.Group>

        <Button
          variant="secondary"
          type="submit"
          style={{ marginLeft: "0.30rem" }}
          className="mb-3"
        >
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default SearchHeroes;
