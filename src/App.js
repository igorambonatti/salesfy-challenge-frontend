import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Header from './components/Header/index';

import history from './services/history';
import Routes from './routes/index';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
