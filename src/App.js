import React from 'react';


function Food(props){
  return <h1>Korean Food {props.fav }{props.hel} </h1>;
}

function App() {
  return (
    <div>
      <h1>HELLO!</h1>
        <Food fav="kimch" />
        <Food fav="ramen" />
        <Food fav="hanbok" />
        <Food hel="hello" />
        
      
    </div>
    )
}

export default App;
