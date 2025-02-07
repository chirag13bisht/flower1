import React from 'react';
import { useNavigate } from 'react-router-dom';

const Front = () => {
  const navigate = useNavigate();

  return (
    <div className="front-container">
      <div className="front-card">
        <h1 className="front-heading">Happy Rose Day! 🌹</h1>
        <p className="front-text">
          Happy rose day baby.
        </p>
        <p className="front-text">
          So mene notice kiya ki i have given you 4 colors and 2 type of roses. Each one signify different things pr jese tum bolte ho mene sare diye toh 
          ladai ke baad hi h kabhi ese toh ni diya, baat toh sahi h

        </p>
        <p className='front-text'>
            Pr koi ni this one is for you 
        </p>
        <button className="front-button" onClick={() => navigate('/flower')}>Click on me</button>
      </div>
    </div>
  );
};

export default Front;