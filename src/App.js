// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Header } from './Header';
import { Discription } from './Description';
import { DogImg } from './DogImage';



/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  
  return (
    <div>
      <Header />
      <Discription />
      <hr />
    </div>
  );
}

