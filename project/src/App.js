
import {Container} from './styled-components/Container'
import {Header} from "./styled-components/Header";
import {Content} from "./styled-components/Content";
import ToSchedule from "./pages/ToSchedule/ToSchedule";
import GetSchedule from "./pages/GetSchedule/GetSchedule";
import {useState} from "react";

function App() {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <Header/>
      <Content>
        <ToSchedule active={active} setActive={setActive}/>
        <GetSchedule active={active} setActive={setActive}/>
      </Content>
    </Container>
  );
}

export default App;
