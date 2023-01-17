// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { useState, useEffect } from 'react';

export const DogImagesList = (props) => {

	const imageList = props.imagesUrl.map((imgUrls) => (
		<img className='dog-image' key={imgUrls} src={imgUrls} alt={imgUrls} width="30%" ></img>
	))

	return (
		<>
			<div className='image-container-in-DIL'>
				{imageList}
			</div>
		</>
	)
}