import {Content, Description, Div, IdP} from "./styled";
import useForm from "../../hooks/useForm";
import {H1} from "../../styled-components/H1";
import {makeStyles, TextField} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import {useState} from "react";
import {SchedulingController} from "../../controller/SchedulingController";
import {MyButton} from "../../styled-components/MyButton";
import CircularProgress from '@material-ui/core/CircularProgress';

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

const schedulingController = new SchedulingController()

export default function GetSchedule({active, setActive}){
  const [form, setForm, clearForm] = useForm(initialForm)
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false)

  const classes = useStyles()

  const getSchedule = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try{
      const newSchedules = await schedulingController.getSchedule(form.idServico, form.idConsultor, form.data)
      setSchedules(newSchedules)
    }catch (err){
      alert(err.message)
    }
    setLoading(false)
  }

  const renderSchedules = ()=>{
    return schedules.map(s=>{
      return (
        <Div>
          <IdP>{s.idConsultor}</IdP>
          <IdP>{s.idServico}</IdP>
          <IdP>{s.data.slice(0,10)}</IdP>
          <Description>{s.descricao}</Description>
        </Div>
      )
    })
  }

  return(
    <Content active={active}>
      {
        active?
          <>
            <form className={classes.root} onSubmit={getSchedule}>
              <TextField
                type={'date'}
                value={form.data}
                onChange={setForm}
                name={'data'}
              />
              <div>
                <TextField
                  className={classes.tam}
                  type={'number'}
                  label={'Id Consultor'}
                  value={form.idConsultor}
                  onChange={setForm}
                  name={'idConsultor'}
                />
                <TextField
                  className={classes.tam}
                  type={'number'}
                  label={'Id Servico'}
                  value={form.idServico}
                  onChange={setForm}
                  name={'idServico'}
                />
              </div>
              <MyButton>
                <Button variant={'contained'} color={'secondary'}>Consultar</Button>
              </MyButton>
            </form>
            {loading?
              <CircularProgress/>
              :
              <>
                <Div>
                  <IdP><b>Id consultor</b></IdP>
                  <IdP><b>Id servico</b></IdP>
                  <IdP><b>Data</b></IdP>
                  <Description><b>Descrição</b></Description>
                </Div>
                {renderSchedules()}
              </>
            }
          </>
          :
          <H1>Cadastrar agendamento</H1>
      }
    </Content>
  )
}