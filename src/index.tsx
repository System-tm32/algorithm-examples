import './styles/style';
import React from 'react';
import { render } from 'react-dom';
import { Home } from './pages/Home';

const App = (): JSX.Element => {
  return <Home />;
};

render(<App />, document.getElementById('app'));
