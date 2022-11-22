// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Header } from './Header';
import { Description } from './Description';
import { breeds, selectedBreed, handleChange } from './BreedsSelect';
import {useState, useEffect} from 'react';


/**
 * 
 * @type {React.FC}
 */

export const App = () => {

  const breedsEx = [
    {key:1, value:"チワワ"},
    {key:2, value:"レトリバー"},
    {key:3, value:"しば"},
    {key:4, value:"ダックス"}
  ]
  
  const [selectedOption, setSelectedOption] = useState('');


  const [open, setOpen] = useState('false');

  return (
    <div>
      <Header />
      <Description />
      <hr />
      <BreedsSelect 
        breeds = {breeds}
        onchange = {(item) => setSelectedOption(item)}
        selected = {selectedBreed}
        placeholder = {"Search"}
        open = {open}
        setOpen = {setOpen}
      />
    </div>
  );
}

