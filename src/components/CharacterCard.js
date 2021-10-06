import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card, Table } from "react-bootstrap";
import CharacterInfo from "./CharacterInfo";
import CharacterOptions from "./CharacterOptions";

const CharacterCard = (props) => {
  const [displayBio, setDisplayBio] = useState(false);
  const myUuid = uuidv4();
  const character = props.character;

  return (
    <Card key={myUuid}>
      <Card.Img
        fluid
        variant="top"
        src={character.image.url}
        style={{ height: "8rem" }}
      />

      <Card.Body>
        <Card.Title className="d-flex justify-content-center">
          {character.name}
        </Card.Title>
        <Card.Subtitle
          //Displayign character alignment
          className={
            character.biography.alignment === "good"
              ? "hero d-flex justify-content-center"
              : "villian d-flex justify-content-center"
          }
        >
          {character.biography.alignment.toUpperCase()}
        </Card.Subtitle>
        {/* Card data toogle */}
        <Table onClick={() => setDisplayBio(!displayBio)}>
          {displayBio ? (
            <CharacterInfo character={character} />
          ) : (
            <tbody>
              {/* Mapping character powerstats */}
              {Object.getOwnPropertyNames(character.powerstats).map((e) => (
                <tr className="d-flex justify-content-between">
                  <td>{e}</td>
                  <td key={myUuid}>{character.powerstats[e]}</td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
        {/* Rendering action button  */}
        <CharacterOptions character={character} />
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
