import React from 'react';
import GlobalStyle from './styles';
import Login from './components/Login';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  );
};

export default App;
