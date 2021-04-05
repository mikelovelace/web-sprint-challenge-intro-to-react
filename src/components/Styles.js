import styled from "styled-components";

export const CharContainer = styled.div
  `
  display: flex;
  margin: 0 auto;
  justify-content: center;
  max-width: 1000px;
  flex-flow: row wrap;
  color: white;
  `

export const Row = styled.div
  `
  display: flex;
  flex-flow: column wrap;
  width: 250px;
  padding: 1%;
  margin: 3px 3px;
  background: #111;
  color: white;
  filter: opacity(90%)
  `

export const HeaderTitle = styled.h1
  `
  font-size: 3.9rem;
  font-color: #ffffff;
  text-align: center;
  color: #111;
  
  `

export const SubTitle = styled.p
  `
  font-size: 1rem;
  color: #e5994c;
  font-weight: bold;
  
  `

export const CharName = styled.h2
  `
  text-align: center;
  font-size: 1.55rem;
  line-height: 50px;
  color: #000000;
  font-weight: bold;
  text-transform: uppercase;
  background: #e5994c;
  margin-top: -1px;
  
  `

export const SubData = styled.span

  `
  color: white;
  font-weight: 100;
  font-size: 1rem;
  
  `