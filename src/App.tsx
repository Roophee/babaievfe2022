import React, { useReducer } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import { reducer, initialValue } from './state/reducer'
import { MovingCtx } from './state/context'
import './App.css';

function App() {
    const [state, dispatch] = useReducer(reducer, initialValue)
    const defaultState = {state, dispatch};

  return (
    <MovingCtx.Provider value={defaultState}>
      <Header/>
      <Container/>
      <Footer/>
    </MovingCtx.Provider>
  );
}

export default App;
