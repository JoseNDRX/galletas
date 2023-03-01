import React from 'react';


const FortuneCookie = ({ phraseData }) => {

  return (
    <div>
      
      <div className="fortuneCooKiesContainer animate__animated animate__bounce">

        <h2 className="box">{phraseData.phrase}</h2>

      </div>
        
      
    </div>
  );
};

export default FortuneCookie;