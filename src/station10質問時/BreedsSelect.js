// DO NOT DELETE

import * as React from 'react'
import './App.css'

export const BreedsSelect =
	(props) => {
		const invalidValue =
			<option key="Select" value="">Select</option>;

		const breedsList = props.breeds.map((breed) => (
			<option key={breed} value={breed}>{breed}</option>
		))

		const checker = 
		<p>selected breed is {props.selectedBreed}</p>

		return (
			<main>
				<div className='dropdown-container'>
					<form>
						<label>
							Breeds List:
							<select name="breed" value={props.selectedBreed} onChange={props.onChange} required>
								{invalidValue}
								{breedsList}
							</select>
							<input type="submit" ></input>
						</label>
					</form>
					{checker}
				</div>
			</main>

		)
	}
