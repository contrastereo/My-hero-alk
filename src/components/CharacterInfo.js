import React from "react";

const CharacterInfo = (props) => {
  //here we're storing the character's information
  const character = props.character;
  return (
    <tbody>
      <tr>
        <td>Weight</td>
        <td>{character.appearance.weight[0]}</td>
      </tr>
      <tr>
        <td>Height</td>
        <td>{character.appearance.height[0]}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{character.biography["full-name"]}</td>
      </tr>
      <tr>
        <td>Alias</td>
        <td>{character.biography.aliases[0]}</td>
      </tr>
      <tr>
        <td>Eye Color</td>
        <td>{character.appearance["eye-color"]}</td>
      </tr>
      <tr>
        <td>Secret Base</td>
        <td>{character.work.base}</td>
      </tr>
    </tbody>
  );
};
export default CharacterInfo;
