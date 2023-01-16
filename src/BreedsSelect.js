// DO NOT DELETE

import * as React from 'react'
import './App.css'

export const BreedsSelect = (props) => {
	const invalidValue =
		<option key="" value="">Select</option>;

	const breedsList = props.breeds.map((breed) => (
		<option key={breed} value={breed}>{breed}</option>
	))


	return (
		<>
			<select name="breed" value={props.selectedBreed} onChange={props.onChange} required>
				{invalidValue}
				{breedsList}
			</select>
		</>
	)
}
