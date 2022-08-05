import React from 'react';
// components
import AppContainer from './components/containers/app';
import BoardComponent from './components/elements/board';
// styles
import './assets/main.scss';

const App = () => {
  return (
    <AppContainer>
      <BoardComponent />
    </AppContainer>
  );
}

export default App;
