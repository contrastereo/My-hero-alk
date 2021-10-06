import React, { useContext } from "react";
//Components and Context
import CharacterCard from "./CharacterCard";
import { characterContext } from "../context/CharacterContext";

//Bootstrap
import { Row, Col } from "react-bootstrap";

const SearchResults = (props) => {
  const { searchResults, setSearchResults } = useContext(characterContext);
  if (searchResults.length === 0) {
    return null;
  }
  if (searchResults.length === 1 && searchResults[0] === "none") {
    return (
      <h2>
        Seems like i can't find what you're looking for, try something else.
      </h2>
    );
  }

  return (
    <div>
      <Row>
        {searchResults.map((character) => (
          <Col xl={3} lg={4} md={6} xs={12}>
            <CharacterCard character={character} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default SearchResults;
