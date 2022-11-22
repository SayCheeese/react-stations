// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {useState, useEffect} from 'react';

export const DogListContainer = () => {

	const [breeds, setBreeds] = useState([]);
	const [selectedBreed, setSelectedBreed] =useState("しば");

	useEffect(
		() => {
			fetch("https://dog.ceo/api/breeds/list/all")
			.then(res => res.json())
			.then(data => {setBreeds(data.message)})
		},[])

	const handleChange = (e) => (e.target.event);

	useEffect(() => {
			setSelectedBreed()
		},[handleChange])

	const breedsEx = ["チワワ", "レトリバー", "ダックス", "しば", "アキタ"]

	const breedsList = breedsEx.map((breed) => 
	<option key={breed} value={breed}>{breed}</option>
	)

	return(
		<select value = {selectedBreed} onChange = {handleChange}>
			{breedsList}
		</select>
	)

}
