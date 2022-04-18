import { AppContainer, Header, Body } from './AppStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Router from './router';
import Calendar from './components/calendar/Calendar';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
      <Header>
        <TopBar />
      </Header>
      <Body>
        <SideBar />
        <Calendar />
      </Body>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;