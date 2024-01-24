// import React from 'react'
import styled from 'styled-components'
import Icon from './Icon';




const Item = styled.div`
  width: 100%;
  /* background-color: #a52222; */
  padding: 0 12px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom:1px ;

  & img {
    margin-right: 18px;
  }

  & p {
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 14px;
    line-height: 2rem;
    font-weight: 500;
    color: #0f0f0f;
  }

  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;







export default function Item_nav(prompt) {
  return (
    <Item>
        <Icon img={prompt.icono} hover={false}/>

        

        <p>{prompt.text}</p>
    </Item>
  )
}
