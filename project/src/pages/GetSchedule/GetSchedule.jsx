import {Content, Description, Div, idP} from "./styled";
import useForm from "../../hooks/useForm";
import {H1} from "../../styled-components/H1";
import {makeStyles, TextField} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import {useEffect, useState} from "react";
import {SchedulingController} from "../../controller/SchedulingController";

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
  const classes = useStyles()

  const getSchedule = async(e)=>{
    e.preventDefault()
    try{
      const newSchedules = await schedulingController.getSchedule(form.idServico, form.idConsultor, form.data)
      setSchedules(newSchedules)
    }catch (err){
      alert(err.message)
    }
  }

  const renderSchedules = ()=>{
    return schedules.map(s=>{
      return (
        <Div>
          <idP>{s.idConsultor}</idP>
          <idP>{s.idServico}</idP>
          <Description>{s.emailCliente}</Description>
        </Div>
      )
    })
  }
  
  return(
    <Content active={active}>
      {
        active?
          <>
            <form className={classes.root}>
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
                  required
                  label={'Id Consultor'}
                  value={form.idConsultor}
                  onChange={setForm}
                  name={'idConsultor'}
                />
                <TextField
                  className={classes.tam}
                  type={'number'}
                  required
                  label={'Id Servico'}
                  value={form.idServico}
                  onChange={setForm}
                  name={'idServico'}
                />
              </div>
              <Button variant={'contained'} color={'secondary'} onClick={getSchedule}>Consultar</Button>
            </form>
            {renderSchedules()}
          </>
          :
          <H1>Cadastrar agendamento</H1>
      }
    </Content>
  )
}