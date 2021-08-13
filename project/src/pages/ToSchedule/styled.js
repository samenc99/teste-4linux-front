import styled from "styled-components";

export const Content = styled.article`
  width: 50%;
  height: 100%;
  background-color: ${props=>props.active?'#fff':'#151515'};
  transition: background-color 1s;
`