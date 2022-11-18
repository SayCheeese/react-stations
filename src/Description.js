// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {useState} from 'react';
import { DogImg } from './DogImage';

/**
 * 
 * @type {React.FC}
 */

export const Discription =(props) => {

	const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  
  async function callApi() {
    const viewFetch = await fetch("https://dog.ceo/api/breeds/image/random");
    const newImg = await viewFetch.json();
    setDogUrl(newImg.message);
  }

  return (
	<article>
		<div className='mm'>
			<p>犬の画像を表示するサイトです</p>
		</div>
		<div className='mm'>
			<DogImg url= {dogUrl} />
		</div>
		<button onClick={callApi} className='btn'>
			更新
		</button>
	</article>
	)
}

// 1. Appコンポーネント(App.js)を以下の2つのコンポーネントに分割して、作成したコンポーネントをAppコンポーネントから呼び出す。
// - ヘッダー(Header.js)
// - サイトの説明・犬の画像・更新ボタン・dogUrlのState(Description.js)