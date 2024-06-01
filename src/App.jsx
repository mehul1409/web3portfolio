import { useState } from 'react';
import './App.css'
import Wallet from './components/wallets/wallet';
import Project from './components/projects/Project';
import Hero from './components/Hero/Hero';

function App() {

  const [state, setState] = useState({
    web3: null,
    contract: null
  });

  const savestate = (state) => {
    console.log(state);
    setState(state);
  }

  return (
    <>
      <Wallet savestate={savestate}></Wallet>
      <Hero state={state} />
      <Project state={state} />
    </>
  )
}

export default App;
