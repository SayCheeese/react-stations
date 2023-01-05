// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { useState, useEffect } from 'react';
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {

	const [breeds, setBreeds] = useState([]);

	useEffect(
		() => {
			fetch("https://dog.ceo/api/breeds/list/all")
				.then(res => res.json())
				.then(data => {
					const list = data.message
					setBreeds(Object.keys(list))
				})
		}, [])

	const [selectedBreed, setSelectedBreed] = useState([]);
	const handleChange = (e) => setSelectedBreed(e.target.event);
	console.log(breeds);
	console.log(selectedBreed);

	return (
		<>
			<BreedsSelect
				breeds={breeds}
				onChange={handleChange}
				selectedBreed={selectedBreed} />
		</>
	)
}
