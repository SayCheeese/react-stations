// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { useState, useEffect, useRef } from 'react';
import { BreedsSelect } from './BreedsSelect';
import { DogImagesList } from './DogImagesList';


export const DogListContainer = () => {

	// breedsの定義
	const [breeds, setBreeds] = useState([]);

	useEffect(
		() => {
			fetch("https://dog.ceo/api/breeds/list/all")
				.then(res => res.json())
				.then(data => { setBreeds(Object.keys(data.message)) });
			console.log("breeds defenition are following.");
			console.log(breeds);
		}, [])


	// selectedBreedの定義
	const [selectedBreed, setSelectedBreed] = useState([]);

	const handleChange = (e) => {
		setSelectedBreed(e.target.value);
		console.log("\\\\\\ handle changed ///");
		console.log(`pre-selectedBreed = ${selectedBreed}`);
	}
	console.log(`current selectedBreed = ${selectedBreed}`);




	// 初回レンダリング時の定義-------------------------
	const isFirstRender = useRef(false)

	// このeffectは初回レンダー時のみ呼ばれるeffect
	useEffect(() => {
		isFirstRender.current = true
	}, [])
	// 状態管理のための関数
	const [state, setState] = useState(0);
	// ----------------------------------------------

	// 表示ボタンの定義
	function callNewImages() {
		console.log('表示ボタンをクリックしました');
	}



	// 画像リストのためにfetchしたいURLの定義
	const [imagesUrlToFetch, setImagesUrlToFetch] = useState("https://dog.ceo/api/breeds/image/random/3")
	// この時点ではimagesUrlToFetchは"string"

	// handleChangeしたらimagesUrlToFetchを入れ替える
	useEffect(
		() => {
			if (selectedBreed == "") {
				console.log(`imagesUrlToFetch (at FirstRender)= ${imagesUrlToFetch}`);
				setState;
				return;
			}
			else {
				console.log("\\ start to set URL to fetch /");
				console.log("selected breed = " + selectedBreed);
				setImagesUrlToFetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`);
				setState(state + 1);
			}
		}, [selectedBreed])

	useEffect(
		() => {
			console.log("imagesUrlToFetch (after handle changed)= " + imagesUrlToFetch);
		}, [state])

	console.log("URLtoFetch = " + imagesUrlToFetch)


	// 表示する犬画像のURLリスト

	console.log(`type of imagesUrlToFetch >>${typeof imagesUrlToFetch}`);	//string
	let urls = JSON.stringify(imagesUrlToFetch);
	console.log(`type of urls >>${typeof urls}`);	//string
	const [imagesUrl, setImagesUrl] = useState([urls]);

	console.log(`imagesUrl (just after defined) = ${imagesUrl}`)	// "https://dog.ceo/api/breeds/image/random/3"

	useEffect(() => {
		// // if (!state == 0) {
		// if (isFirstRender.current) {
		// 	isFirstRender.current = false;
		// 	return;
		// }
		// // else if (isFirstRender.current) { return; }
		// else {
			console.log("\\ start fetch. /")
			console.log("URLtoFetch = " + imagesUrlToFetch)
			console.log("type of URLtoFetch = " + typeof imagesUrlToFetch)
			fetch(imagesUrlToFetch)
				.then(res => res.json())
				.then(urls => setImagesUrl(urls.message))
				.then(data => console.log(`imagesUrl (after useEffect)= ${imagesUrl}`));
		// }
	}, [state])

	console.log("imagesUrl (after useEffect)= " + imagesUrl);
	console.log(imagesUrl);	// ['"https://dog.ceo/api/breeds/image/random/3"'] (Array)


	// Checker
	const checker = (
		<p>handleChange function checker;
			selected breed is {selectedBreed}</p>
	)

	return (
		<>
			<div className='dropdown-container'>
				<form>
					<label>
						Breeds List:
					</label>
					<BreedsSelect
						breeds={breeds}
						selectedBreed={selectedBreed}
						onChange={handleChange}
					/>
					<button onClick={callNewImages} className="view-btn">表示</button>
				</form>
				{checker}
			</div>
			<div className='image-container'>
				<DogImagesList
					selectedBreed={selectedBreed}
					imagesUrl={imagesUrl}
					callNewImages={callNewImages}
				/>
			</div>
		</>
	)
}
