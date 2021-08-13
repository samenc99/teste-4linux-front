import {Content} from "./styled";
import useForm from "../../hooks/useForm";
import {H1} from "../../styled-components/H1";
import {makeStyles, TextField} from "@material-ui/core";
import Button from '@material-ui/core/Button';

const initialForm = {data: '', idServico: '', idConsultor: ''}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '50%',
      marginBottom: '20px'
    }
  },
  tam : {
    width: '45%'
  }
}));

export default function GetSchedule({active, setActive}){
  const [form, setForm, clearForm] = useForm(initialForm)
  const classes = useStyles()
  return(
    <Content active={active}>
      {
        active?
          <form className={classes.root}>
            <TextField
              type={'date'}
              value={form.data}
              onChange={setForm}
            />
            <div>
              <TextField
                className={classes.tam}
                type={'number'}
                required
                label={'Id Consultor'}
                value={form.idConsultor}
                onChange={setForm}
              />
              <TextField
                className={classes.tam}
                type={'number'}
                required
                label={'Id Servico'}
                value={form.idServico}
                onChange={setForm}
              />
            </div>
            <Button variant={'contained'} color={'secondary'}>Consultar</Button>
          </form>
          :
          <H1>Cadastrar agendamento</H1>
      }
    </Content>
  )
}