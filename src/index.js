import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import BODY from './components/body.jsx';

function MyInfo(){
  return (
    <div>
      <h1>Alexis Nunez</h1>
      <p>Hi, my name is Alex and I like turtles in my soup. It is so yummy to eat and enjoy.</p>
      <ol>
        <li>Cancun</li>
        <li>Paris</li>
        <li>Barcelona</li>
      </ol>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyInfo/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
