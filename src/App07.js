// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {useState} from 'react';

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/terrier-irish/n02093991_4404.jpg");
  
  async function callApi() {
    const viewFetch = await fetch("https://dog.ceo/api/breeds/image/random");
    const newImg = await viewFetch.json();
    setDogUrl(newImg.message);
  }
  
  return (
    <header>
      <div className='title'>
        <h2>Dog アプリ</h2>
      </div>
      <div className='mm'>
        <p>犬の画像を表示するサイトです</p>
      </div>
      <div className='mm'>
        <img src= {dogUrl} />
      </div>
      <button onClick={callApi} className='btn'>
        更新
      </button>
      <hr className='line' />
    </header>
  );
}
