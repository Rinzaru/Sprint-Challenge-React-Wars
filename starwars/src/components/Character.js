// Write your Character component here
import React from "react";
import styled from "styled-components";

const Card = styled.div`
    boarder: 1px solid red;
    background-color: white;
    width: 50%;
    display: flex
    flex-direction: column;
    align-items: center;
    margin-left: 24%;
    margin-bottom: 10px;
`;

function characterComponent(props) {
  console.log(props.characterArray, "Props");
  return (
    <div>
      {props.characterArray.map((e) => {
        return (
          <Card key={e.created}>
            <h1>Name: {e.name}</h1>
            <p>Born on: {e.birth_year}</p>
            <p>Gender: {e.gender}</p>
            <p>Height: {e.height} CM.</p>
          </Card>
        );
      })}
    </div>
  );
}

export default characterComponent;
