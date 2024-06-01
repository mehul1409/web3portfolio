import React, { useEffect, useState } from 'react'
import './Project.css'
const Project = ({state}) => {

  const [ProjectDetail,setProjectDetail] = useState("");

  useEffect(()=>{
    const {contract} = state;
    console.log(contract);
    const projects = async()=>{
      const projects = await contract.methods.allProjects().call();
      console.log(projects);
      setProjectDetail(projects);
    }
    contract && projects();
  },[state]);

  const donate = async(event) =>{
    event.preventDefault();
   try{
    const {contract,web3} = state;
    const eth = document.getElementById('eth').value;
    const weiValue = web3.utils.toWei(eth,"ether");
    const accounts = await web3.eth.getAccounts();
    await contract.methods.donate().send({from:accounts[0],value:weiValue,gas:48000});
    alert("Transaction Completed!");
   }catch(error){
    alert("transaction not successfull");
   }
  }

  return (
   <>
    <div className='projectsection'>
       <div className='projectheading'>PROJECTS</div>
       <div className='container'>
        {
          ProjectDetail!=="" && ProjectDetail.map((item,index)=>(
            <div className="project" key={index}>
          <div className="image">
            <img src={`https://salmon-lazy-starfish-705.mypinata.cloud/ipfs/${item.imageLink}`} alt="" />
          </div>
          <div className="title">{item.name}</div>
          <div className="description">{item.description}</div>
          <div className="button">
          <a href={`https://github.com/mehul1409/${item.githubLink}`}>Github</a>
        </div>
        </div>
          ))
        }
       </div>
    </div>
    <div className='ethDonate'>
      <div>Enter the ETH you want to donate:-</div>
      <form onSubmit={donate}>
      <input type="text" id="eth" />
      <input type="submit" />
      </form>
    </div>
   </>
  )
}

export default Project
