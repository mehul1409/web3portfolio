import React, { useEffect, useState } from 'react'
import './Hero.css';

const Hero = ({ state }) => {
  const [descriptions, setDescriptions] = useState("");
  useEffect(() => {
    const { contract } = state;
    const descriptionShow = async () => {
      const descriptionText = await contract.methods.description().call();
      console.log(descriptionText);
      setDescriptions(descriptionText);
    }
    contract && descriptionShow();
  }, [state]);

  return (
    <>
      <div className="name">Mehul Bansal</div>
      <div className="description">{descriptions}</div>
    </>
  )
}

export default Hero
