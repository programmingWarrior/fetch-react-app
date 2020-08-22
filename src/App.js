import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Welcome to React Mr.Shawon Ahmed</h1>
        <UserList></UserList>
       

        
        


         
        
      </header>
    </div>
  );
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
