import {Content} from "./styled";
import useForm from "../../hooks/useForm";
import {H1} from "../../styled-components/H1";

const initialForm = {data: '', idServico: '', idConsultor: ''}

export default function GetSchedule({active, setActive}){
  const [form, setForm, clearForm] = useForm(initialForm)

  return(
    <Content active={active}>
      {
        active?
          <form></form>
          :
          <H1>Cadastrar agendamento</H1>
      }
    </Content>
  )
}