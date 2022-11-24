import React from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from "./06_callback/06_callback";

function App() {
    const names = ["Viktor","Vlad","Vova"]
    let liElements = names.map((n,i) => <li key={i}>{i} -- {n}</li>)
  return (
    <div className="App">
<User/>
        {/*<ul>*/}
{/*    {liElements}*/}
{/*</ul>*/}
    </div>
  );
}

export default App;
