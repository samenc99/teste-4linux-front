import styled from "styled-components";

export const Content = styled.article`
  width: 50%;
  height: 100%;
  background-color: ${props=>props.active?'#151515':'#fff'};
  transition: background-color 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  >form{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`