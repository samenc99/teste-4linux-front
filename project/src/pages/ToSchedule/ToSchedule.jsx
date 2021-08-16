import {Content} from "./styled";
import useForm from "../../hooks/useForm";
import {makeStyles} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {H1} from "../../styled-components/H1";
import {SchedulingController} from "../../controller/SchedulingController";
import {MyButton} from "../../styled-components/MyButton";
import {useState} from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import {ServiceConsultantController} from "../../controller/ServiceConsultantController";
import {Description, Div, IdP} from "../../styled-components/table";

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
const serviceConsultantController = new ServiceConsultantController()

export default function ToSchedule({active, setActive}){
  const [form, setForm, clearForm] = useForm(initialForm)
  const [loading, setLoading] = useState(false)
  const [servicesConsultants, setServicesConsultants] = useState([])
  const classes = useStyles()

  const onSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try{
      await schedulingController.toSchedule(form)
      clearForm()
      alert('Agendado com sucesso!')
    }catch (err){
      alert(err.message)
    }
    setLoading(false)
  }

  const onClickConsultant = async()=>{
    setLoading(true)
    try{
      const newServicesConsultants = await serviceConsultantController.getServicesConsultants()
      setServicesConsultants(newServicesConsultants)
    }catch (err){
      alert(err.message)
    }
    setLoading(false)
  }

  const renderServicesConsultants = ()=>{
    const render = []
    if(servicesConsultants.length>0){
      render.push(
        <Div>
          <IdP><b>Id serviço</b></IdP>
          <IdP><b>Id consultor</b></IdP>
          <Description><b>Descrição</b></Description>
        </Div>
      )
      servicesConsultants.forEach(sc=>{
        render.push(
          <Div>
            <IdP>{sc.idServico}</IdP>
            <IdP>{sc.idConsultor}</IdP>
            <Description>{sc.descricao}</Description>
          </Div>
        )
      })
      return render
    }
    return <></>
  }

  return(
    <Content active={active}>
      {
        !active?
          <>
            {
              loading?
                <CircularProgress/>
                :
                <></>
            }
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
            <Button
              variant={'contained'}
              color={'secondary'}
              onClick={onClickConsultant}
            >Consultar serviços</Button>
            {renderServicesConsultants()}
          </>
          :
          <H1>Consultar agendamento</H1>
      }
    </Content>
  )
}