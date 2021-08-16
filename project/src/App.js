import {Container} from './styled-components/Container'
import {Header} from "./styled-components/Header";
import {Content} from "./styled-components/Content";
import ToSchedule from "./pages/ToSchedule/ToSchedule";
import GetSchedule from "./pages/GetSchedule/GetSchedule";
import {useState} from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {PopulateController} from "./controller/PopulateController";

const useStyles = makeStyles((theme) => ({

  active: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    fontWeight: 'bold'
  },
  populate: {
    backgroundColor: '#f00',
    position: 'absolute',
    right: '10px',
    color: '#fff',
    fontWeight: 'bold'
  }
}));

const populateController = new PopulateController()

function App() {
  const [active, setActive] = useState(false);
  const classes = useStyles()

  const populate = async()=>{
    try{
      await populateController.populate()
      alert('Base de dados criada.')
    }catch (err){
      alert(err.message)
    }
  }

  return (
    <Container>
      <Header className={classes.root}>
        <ButtonGroup color={'primary'} aria-label={'outlined primary button group'} >
          <Button
            className={active? classes.active : ''}
            onClick={()=>setActive(true)}
          >Consultar</Button>
          <Button
            className={!active? classes.active : ''}
            onClick={()=>setActive(false)}
          >Cadastrar</Button>
        </ButtonGroup>
        <Button className={classes.populate} onClick={populate}>Popular banco</Button>
      </Header>
      <Content>
        <GetSchedule active={active} setActive={setActive}/>
        <ToSchedule active={active} setActive={setActive}/>
      </Content>
    </Container>
  );
}

export default App;
