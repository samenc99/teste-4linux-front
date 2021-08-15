import styled from "styled-components";

export const Content = styled.article`
  width: 50%;
  height: 100%;
  background-color: ${props=>props.active?'#fff':'#151515'};
  transition: background-color 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >form{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    >div:nth-child(2){
      display: flex;
      justify-content: space-between;
    }
  }
`

export const Div = styled.div`
  width: 80%;
  border-bottom: 1px solid #8d8d8d;
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
`

export const idP = styled.p`
  width: 20%;
`

export const Description = styled.p`
  width: 50%;
`