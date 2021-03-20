import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";


function App() {

  const [list, setList] = useState([]);

  const getTodos = () => {
    axios
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
        setList(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {list.map(item => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
