import { AppContainer, Header, Body } from './AppStyles';
import Calendar from './components/calendar/Calendar';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';

function App() {
  return (
    <AppContainer>
      <Header>
        <TopBar />
      </Header>
      <Body>
        <SideBar />
        <Calendar />
      </Body>
    </AppContainer>
  );
}

export default App;