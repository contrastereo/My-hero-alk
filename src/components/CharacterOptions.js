import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { characterContext } from "../context/CharacterContext";
import { Button, Card } from "react-bootstrap";

const CharacterOptions = (props) => {
  const location = useLocation();
  const { myTeam, setMyTeam } = useContext(characterContext);
  const character = props.character;
  const isViable = (char) => {
    let initialValue = 0;
    let charSum = myTeam.reduce((accumulator, preValue) => {
      if (character.biography.alignment === preValue.biography.alignment) {
        accumulator++;
      }
      return accumulator;
    }, initialValue);
    if (charSum < 3) {
      return true;
    } else {
      return false;
    }
  };
  //Event handlers for the buttons
  const handleClick = (targetCharacter) => {
    return setMyTeam([...myTeam, targetCharacter]);
  };

  const handleRemove = (targetCharacter) => {
    return setMyTeam(myTeam.filter((char) => char !== targetCharacter));
  };
  //Display Logic
  const displayButtons = (char) => {
    if (!isViable(char) && location.pathname !== "/") {
      return (
        <span className="disabledCharacter">
          {`Seems like you have too many ${char.biography.alignment} guys on your
          team`}
        </span>
      );
    } else if (char.biography.alignment == "neutral") {
      return (
        <span className="disabledCharacter">
          "Neutral characters can't fight"
        </span>
      );
    } else if (
      location.pathname === "/" ||
      myTeam.find(({ id }) => id === char.id)
    ) {
      return (
        <Button variant="danger" onClick={() => handleRemove(char)}>
          Remove
        </Button>
      );
    } else {
      return (
        <Button
          variant="primary"
          className="mr-2"
          onClick={() => handleClick(char)}
        >
          Add to My Team
        </Button>
      );
    }
  };
  return <div>{displayButtons(character)}</div>;
};
export default CharacterOptions;
