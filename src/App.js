import React from 'react';


function PrintMan({ name, picture }){
  return (
    <div>
      <h2>He is { name } </h2>
      <img src={picture} />
    </div>
  );
}


const manLike = [
  {
    name : 'Zlatan',
    image : 'data:image/jpeg;base64,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',
  },
  {
    name : 'Scott adams',
    image : 'data:image/jpeg;base64,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',
  }
];

function App() {
  return (
    <div>
   {manLike.map(man => (
     <PrintMan name={man.name} picture={man.image} />
   ))}
    </div>
    );
}

export default App;
