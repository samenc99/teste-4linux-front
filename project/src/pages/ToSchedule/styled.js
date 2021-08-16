import styled from "styled-components";

export const Content = styled.article`
  width: 50%;
  height: calc(100vh - 60px);
  background-color: ${props=>props.active?'#151515':'#fff'};
  transition: background-color 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  >form{
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
  }
  overflow-y: auto;
`