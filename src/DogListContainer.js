// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { useState, useEffect } from 'react';
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
			console.log("breeds");
			console.log(breeds);
		}, [])

	// selectedBreedの定義
	const [selectedBreed, setSelectedBreed] = useState([]);

	const handleChange = (e) => {
		setSelectedBreed(e.target.value);
		console.log("handle changed");
		console.log("pre-selectedBreed = " + selectedBreed);
	}

	console.log("current selectedBreed = " + selectedBreed);


	// 画像リストのためにfetchしたいURLの定義
	const [imagesUrlToFetch, setImagesUrlToFetch] = useState("https://dog.ceo/api/breeds/image/random/3")

	console.log("imagesUrlToFetch = " + imagesUrlToFetch)

	// handleChangeしたらimagesUrlToFetchを入れ替える
	useEffect(
		() => {
			setImagesUrlToFetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`);
		}, handleChange)

	console.log("imagesUrlToFetch = " + imagesUrlToFetch)


	// 表示ボタンを押したときの操作を書く（まだ）
	async function callNewImages() { }

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
					<button onClick={callNewImages}>表示</button>
				</form>
				{checker}
			</div>
			<div className='image-container'>
				<DogImagesList
					selectedBreed={selectedBreed}
					imagesUrlToFetch={imagesUrlToFetch}
					onChange={callNewImages}
				/>
			</div>
		</>
	)
}







// useEffect(
// 	() => {
// 		const imagesUrl = (
// 			fetch(imagesUrlToFetch)
// 				.then(res => res.json())
// 				.then(data => Object.keys(data.message))
// 		)
// 		console.log(imagesUrl);
// 	}, callNewImages)