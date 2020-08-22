import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 

  const nayok = ['shawon','shafin','alamin','jasim','babu'];

 
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Welcome to React Mr.Shawon Ahmed</h1>
        <UserList></UserList>
        
        {
          nayok.map(single=><Nayoks name={single}></Nayoks>)
        }
        
        


         
        
      </header>
    </div>
  );
}

function Nayoks(props){
  console.log(props);
  const heroStyle = {
    border:'1px solid red',
    backgroundColor:'tomato',
    color:'yellow',
    margin:'10px',
    borderRadius:'5%'
  }
  return(
    <div style={heroStyle}>
      <h1>Name of Hero of Bangladesh: {props.name}</h1>
      <p>I am pride of Bangladesh</p>
    </div>
  )
}

function UserList(){
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => {
      setUser(data);
    })
    
  },[])
  return(
    <div>
      <h1>User No: </h1>
      <ul>
        {
          user.map(us=><p>{us.name}</p>)
        }
      </ul>
    </div>
  )
}




export default App;
