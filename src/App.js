import { AppContainer, Header, Body } from './AppStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Router from './router';

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
      <Header>
      </Header>
      <Body>
        <Router /> 
      </Body>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;