import react, { useState, useContext } from "react";
import CharacterCard from "../components/CharacterCard";
import TeamScore from "../components/TeamScore";
import { characterContext } from "../context/CharacterContext";
import { Row, Col, Container, Image } from "react-bootstrap";

const Home = () => {
  const { myTeam, setMyTeam } = useContext(characterContext);

  return (
    <div>
      <Container>
        {myTeam.length === 0 ? (
          <div>
            <h1 className="pt-3">Assamble Your Team</h1>
            <h2>Find your Allies in the Search Tab</h2>
          </div>
        ) : null}
        <TeamScore />
      </Container>

      <Row>
        {myTeam.map((character) => (
          <Col xl={3} lg={4} md={6} xs={12}>
            <CharacterCard character={character} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Home;
