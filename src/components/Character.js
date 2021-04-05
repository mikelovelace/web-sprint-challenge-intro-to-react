import React from 'react'
import { Row, SubTitle, CharName, SubData } from "./Styles"

function Character(props) {
  return (

      <Row>
      <CharName>{props.character.name}</CharName>
         <SubTitle>Gender: <SubData>{props.character.gender}</SubData></SubTitle>
         <SubTitle>Birth Year:  <SubData>{props.character.birth_year}</SubData></SubTitle>
         <SubTitle>Height:  <SubData>{props.character.height}</SubData></SubTitle>
         <SubTitle>Mass:  <SubData>{props.character.mass}</SubData></SubTitle>
         <SubTitle>Eye Color:  <SubData>{props.character.eye_color}</SubData></SubTitle>
         <SubTitle>Hair Color:  <SubData>{props.character.hair_color}</SubData></SubTitle>
      </Row>

  )
}

export default Character;