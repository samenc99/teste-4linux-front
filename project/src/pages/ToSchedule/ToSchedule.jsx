import {Content} from "./styled";
import useForm from "../../hooks/useForm";
import {makeStyles} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {H1} from "../../styled-components/H1";
import {SchedulingController} from "../../controller/SchedulingController";
import {MyButton} from "../../styled-components/MyButton";

const initialForm = {data: '', idConsultor: '', idServico: '', emailCliente: ''}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '50%',
      marginBottom: '20px'
    }
  }
}));

const schedulingController = new SchedulingController()

export default function ToSchedule({active, setActive}){
  const [form, setForm, clearForm] = useForm(initialForm)
  const classes = useStyles()

  const onSubmit = async(e)=>{
    e.preventDefault()
    try{
      await schedulingController.toSchedule(form)
      clearForm()
      alert('Agendado com sucesso!')
    }catch (err){
      alert(err.message)
    }
  }

  return(
    <Content active={active}>
      {
        !active?
          <form className={classes.root} onSubmit={onSubmit}>
              <TextField
                type={'date'}
                required
                value={form.data}
                onChange={setForm}
                name={'data'}
              />
              <TextField
                label={'Id Consultor'}
                required
                value={form.idConsultor}
                onChange={setForm}
                name={'idConsultor'}
                type={'number'}
              />
              <TextField
                label={'Id Servico'}
                required
                value={form.idServico}
                onChange={setForm}
                name={'idServico'}
                type={'number'}
              />
              <TextField
                label={'Email do cliente'}
                required
                value={form.emailCliente}
                onChange={setForm}
                name={'emailCliente'}
                type={'email'}
              />
              <MyButton><Button
                variant={'contained'}
                color={'primary'}
              >AGENDAR</Button></MyButton>
            </form>
          :
          <H1>Consultar agendamento</H1>
      }
    </Content>
  )
}