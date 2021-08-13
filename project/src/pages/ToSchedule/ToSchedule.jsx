import {Content} from "./styled";

export default function ToSchedule({active, setActive}){

  return(
    <Content active={active} onMouseEnter={()=>setActive(true)}>

    </Content>
  )
}