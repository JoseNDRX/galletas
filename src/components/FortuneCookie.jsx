import React from 'react';


const FortuneCookie = ({ phraseData }) => {

  return (
    <div>
      
      <div className="fortuneCooKiesContainer">

        <h2>{phraseData.phrase}</h2>

      </div>
        
      
    </div>
  );
};

export default FortuneCookie;