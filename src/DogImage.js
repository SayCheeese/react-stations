// DO NOT DELETE
import * as React from 'react'
import './App.css'
import './Description';

/**
 * 
 * @type {React.FC}
 */

export const DogImage = (props) => {
	return (
		<img src={props.url} /> 
	)
}

// DogImageコンポーネントはpropsとしてurlを受け取ること