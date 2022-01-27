import React from 'react';
import backgroundImg from './background.png';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList.js';

export default function Main(props) {
  // cool zone
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        <AnimalList animals={ props.animals } />
      }
    </main>
  );
}