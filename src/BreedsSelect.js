// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {DogListContainer, selectedBreed } from './DogListContainer'

export const BreedsSelect = 
({
	breedsEx,
	
}) =>	{

	
	return(
		<main>
			<div className='dropdown-container'>

				<form>
					<label>
						Breeds List:
						<DogListContainer />
					</label>
				</form>

			</div>
		</main>
	)
}





