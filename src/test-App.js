// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {useState} from 'react';

/**
 * 
 * @type {React.FC}
 */



export const App = () => {
  
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  
  function setDogUrl () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((apiData) => (img.src = apiData.message))
  }

  return (
    <header>
      <h2>Dog アプリ</h2>
      <article>犬の画像を表示するサイトです</article>
      <img src= {dogUrl} alt='' id="image"/>
      <button onClick={() => setDogUrl()}>
        Click me
      </button>
    </header>
  );
}
