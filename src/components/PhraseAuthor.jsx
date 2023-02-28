import React from 'react';

const PhraseAuthor = ({ phraseData }) => {
  return (
    <div>
      <div className="phraseAuthor">
        <h4>Autor: {phraseData.author}</h4>
      </div>
      
    </div>
  );
};

export default PhraseAuthor;