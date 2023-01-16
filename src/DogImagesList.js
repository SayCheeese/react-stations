// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { useState, useEffect } from 'react';

export const DogImagesList = (props) => {

	const [imagesUrl, setImagesUrl] = useState(["https://images.dog.ceo/breeds/springer-english/n02102040_3640.jpg", "https://images.dog.ceo/breeds/groenendael/n02105056_3309.jpg", "https://images.dog.ceo/breeds/groenendael/n02105056_3666.jpg"]);

	console.log(props.imagesUrlToFetch);

	useEffect(
		() => {
			const imagesUrl = (
				fetch(props.imagesUrlToFetch)
					.then(res => res.json())
					.then(data => (data.message))
			);
			console.log("imagesUrl");
			console.log(imagesUrl);
		}, props.onChange)

	console.log(imagesUrl)

	const imageList = imagesUrl.map((imgUrls) => (
		<img className='dog-image' key={imgUrls} src={imgUrls} alt={imgUrls} width="30%" ></img>
	))

	return (
		<>
			{imageList}
		</>
	)
}