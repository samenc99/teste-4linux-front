import {Container} from './styled-components/Container'
import {Header} from "./styled-components/Header";
import {Content} from "./styled-components/Content";
import ToSchedule from "./pages/ToSchedule/ToSchedule";
import GetSchedule from "./pages/GetSchedule/GetSchedule";
import {useState} from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  active: {
    backgroundColor: 'rgba(255,255,255,0.08)'
  }
}));

function App() {
  const [active, setActive] = useState(false);
  const classes = useStyles()

  return (
    <Container>
      <Header className={classes.root}>
        <ButtonGroup color={'primary'} aria-label={'outlined primary button group'}>
          <Button
            className={!active? classes.active : ''}
            onClick={()=>setActive(false)}
          >Cadastrar</Button>
          <Button
            className={active? classes.active : ''}
            onClick={()=>setActive(true)}
          >Consultar</Button>
        </ButtonGroup>
      </Header>
      <Content>
        <GetSchedule active={active} setActive={setActive}/>
        <ToSchedule active={active} setActive={setActive}/>
      </Content>
    </Container>
  );
}

export default App;
