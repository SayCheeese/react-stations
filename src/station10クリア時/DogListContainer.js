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
				.then(data => { setBreeds(Object.keys(data.message)) })
		}, [])

	const [selectedBreed, setSelectedBreed] = useState([]);
	const handleChange = (e) => {
		setSelectedBreed(e.target.value);
		console.log("handle changed");
		console.log("pre-selectedBreed = " + selectedBreed);
	}



	return (
						<BreedsSelect
							breeds={breeds}
							selectedBreed={selectedBreed}
							onChange={handleChange}
						/>
	)
}
