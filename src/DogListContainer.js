// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {useState, useEffect} from 'react';

export const DogListContainer = () => {

	const [breeds, setBreeds] = useState([]);

	useEffect(
		() => {
			console.log("useEffect");
			fetch("https://dog.ceo/api/breeds/list/all")
			.then(res => res.json())
			.then(data => {
				console.log("breeds data -- ", data)
				setBreeds(data.message)})
		},[]
	)

	return(
		<DogListContainer />
	)

}


// 【でたエラー】
// it('calls `fetch`', async () => {
// 	const { DogListContainer } = require('../src/DogListContainer')
// 	await createAsync(<DogListContainer />)
// 	expect(fetch).toBeCalled()
// })
// Error: expect(jest.fn()).toBeCalled()

// Expected number of calls: >= 1
// Received number of calls:    0
//     at Object.<anonymous> (/Users/ChisaS/Documents/TechTrain/react-stations/tests/station09.test.tsx:24:19)




// 以下の内容はDogListContainerコンポーネントに記述してください。
// 3. 犬種一覧データを保持するために、useStateでbreedsとsetBreedsを定義する。
// 4. useEffectとFetch関数を使って犬種一覧を取得し、用意したstateに格納する。
// - APIのレスポンスから、犬種リストの配列を生成して、breedsに格納するようにしてください
// - 2階層以降は無視して良いです！（例：australianの中のshepherdはbreedsに含めなくてOK）

// 【useEffectについて】
// - useEffectの公式ドキュメント：https://ja.reactjs.org/docs/hooks-effect.html
// - 公式ドキュメントの説明が分かりづらい場合は「React useEffect」などのキーワードで検索して分かりやすい記事を探してみましょう。
// - useEffectの第2引数には、空配列を指定してください。

// 【犬種一覧を取得するDog API】
// - APIのURL：https://dog.ceo/api/breeds/list/all
// - ドキュメント：https://dog.ceo/dog-api/documentation/ の「LIST ALL BREEDS」