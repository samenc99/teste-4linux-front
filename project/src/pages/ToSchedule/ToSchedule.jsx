import {Content} from "./styled";
import useForm from "../../hooks/useForm";
import {makeStyles} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {H1} from "../../styled-components/H1";

const initialForm = {data: '', idConsultor: '', idServico: '', emailCliente: ''}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '50%',
      marginBottom: '20px'
    }
  }
}));

export default function ToSchedule({active, setActive}){
  const [form, setForm, clearForm] = useForm(initialForm)
  const classes = useStyles()
  return(
    <Content active={active} onMouseEnter={()=>setActive(true)}>
      {
        active?
          <form className={classes.root}>
              <TextField
                type={'date'}
                required
                value={form.data}
                onChange={setForm}
              />
              <TextField
                label={'Id Consultor'}
                required
                value={form.idConsultor}
                onChange={setForm}
              />
              <TextField
                label={'Id Servico'}
                required
                value={form.idServico}
                onChange={setForm}
              />
              <TextField
                label={'Email do cliente'}
                required
                value={form.emailCliente}
                onChange={setForm}
              />
              <Button variant={'contained'} color={'secondary'}>AGENDAR</Button>
            </form>
          :
          <H1>Cadastrar agendamento</H1>
      }
    </Content>
  )
}