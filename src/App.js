import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';


function App() {

  const [personaje, setPersonaje]=useState('');

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/2/`)
    .then(response=>{
      console.log(response.data);
      setPersonaje(response.data.name)

    }).catch(err=>{
      console.log(err)
    })
  },[])




  return (
    <div>
      <p>{personaje}</p>
    </div>
  );
}

export default App;
