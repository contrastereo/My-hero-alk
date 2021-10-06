import React, { useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Table } from "react-bootstrap";
import { characterContext } from "../context/CharacterContext";

const TeamScore = () => {
  const myUuid = uuidv4();
  const { myTeam } = useContext(characterContext);
  const [teamAverage, setTeamAverage] = useState(null);
  useEffect(() => {
    let max = 0;
    let maxKey = "";
    const charSum = myTeam.reduce((accumulator, char) => {
      for (const key in char.powerstats) {
        let value = Number.parseInt(char.powerstats[key]) || 0;
        accumulator[key] = (accumulator[key] || 0) + value;
      }
      for (const key in char.appearance) {
        if (key === "weight" || key === "height") {
          let value = char.appearance[key][0].split(" ", 1);
          accumulator[key] =
            (accumulator[key] || 0) + Number.parseInt(value[0]);
        }
      }
      return accumulator;
    }, {});
    if (myTeam.length > 0) {
      charSum.weight = charSum.weight / myTeam.length;
      charSum.height = charSum.height / myTeam.length;
    }
    setTeamAverage(charSum);
    for (const [key, value] of Object.entries(charSum)) {
      if (value > max && key !== "weight" && key !== "height") {
        max = value;
        maxKey = key;
      }
    }
    console.log(teamAverage);
  }, [myTeam]);
  return (
    <Table>
      <thead>
        <tr>
          {teamAverage &&
            Object.getOwnPropertyNames(teamAverage).map((element) => (
              <th key={Date.now() + element}>{element}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {teamAverage &&
            Object.getOwnPropertyNames(teamAverage).map((element) => (
              <td key={Date.now() + teamAverage[element]}>
                {teamAverage[element]}
              </td>
            ))}
        </tr>
      </tbody>
    </Table>
  );
};
export default TeamScore;
