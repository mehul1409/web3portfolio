import React from 'react'
import { useState } from 'react';
import ABI from './ABI.json';
import Web3 from 'web3'; 
import './wallet.css';

const Wallet = ({savestate}) => {
  const [connected,setConnected] = useState(true);
  const init = async()=>{
    try{
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({method:'eth_requestAccounts'});
    const contract = new web3.eth.Contract(
      ABI,"0x737C37f6c3182Ecf1b74F935a0a65e674a9d5009"
    );
    setConnected(false);
    savestate({web3:web3,contract:contract});
    
    }catch(error){
      alert('please install metamask!');
    }
  }
  return (
    <>
      <button onClick={init}>{connected ? "connect metamask" : "connected"}</button>
    </>
  )
}

export default Wallet;
