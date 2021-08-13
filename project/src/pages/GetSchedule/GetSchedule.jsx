import {Content} from "./styled";

export default function GetSchedule({active, setActive}){
  return(
    <Content active={active} onMouseEnter={()=>setActive(false)}>

    </Content>
  )
}