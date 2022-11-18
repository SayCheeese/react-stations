// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <h2>Hello, world!</h2>
    </div>
  )
}

// -----------------------
// Station 02
// -----------------------
  // 【取り組む手順】
    // 1. App.jsを編集して、ヘッダーを作成する。
    // - ヘッダーにはアプリ名（好きに名前をつけてOKです）を含んでください。（例: 「Dogアプリ」）
    // - ヘッダーはheaderタグを使ってください。
    // 2. App.jsの不要な記述は消してください。
    // - Hello, world!
    // 3. VSCodeの「できた！」ボタンを押し、クリア判定を実行する。
    // 4.「クリアおめでとうございます」と表示されればStationクリア！
  // 【クリア条件】
    // App.jsにheaderタグが存在すること

  export const App = () => {
    return (
      <header>
        <h2>Hello, world!</h2>
      </header>
    )
  }
  
// -----------------------
// Station 03
// -----------------------
  // 【取り組む手順】
    // 1. 画面にサイトの説明を表示する。
    // - 説明文は自由に表示してください。例：「 犬の画像を表示するサイトです」)
    // 2. サイトの説明と一緒にimgタグを使って、犬の画像を1つ表示する。
    // 3. VSCodeの「できた！」ボタンを押し、クリア判定を実行する。
    // 4.「クリアおめでとうございます」と表示されればStationクリア！

  // 【Dog APIについて】
    // Dog APIは無料で利用できるAPIです。犬の画像が取得できます。
    // サイト：https://dog.ceo/dog-api/
    // 画像URLの例： https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg

  // 【クリア条件】
    // App.jsに説明の文章とimg要素が存在すること

export const App = () => {
  return (
    <header>
      <h2>Dog アプリ</h2>
      <article>犬の画像を表示するサイトです</article>
      <img src= "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg" />
    </header>
  )
}


// -----------------------
// Station 04
// -----------------------
  // 【取り組む手順】
    // 1. useStateの使い方を確認する。
    // 2. useState関数を定義する。
    //    - state名は dogUrl
    //    - stateの更新用関数は setDogUrl
    // 3. useStateの初期値に、 Station3で利用した犬の画像のURLを設定する。
    // 4. 定義したdogUrlをimgのsrcで利用し、stateを使った画像の指定をする。
    // 5. VSCodeの「できた！」ボタンを押し、クリア判定を実行する。
    // 6.「クリアおめでとうございます」と表示されればStationクリア！

  // 【useStateについて】
    // useStateの公式ドキュメント: https://ja.reactjs.org/docs/hooks-state.html
    // 公式ドキュメントの説明が分かりづらい場合は、「React state」や「React useState」といったキーワードで検索して分かりやすい記事を探してみましょう！
    // ReactはJavaScriptのClassを使う方法と関数を使う方法の2種類が存在します。今は関数を使うことが主なので、まずは関数を使う方法を理解するのがおすすめです。

  // 【参考】
    // JSX に式を埋め込む：https://ja.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx

  // 【クリア条件】
    // 1. App.jsでuseStateを呼び出していること
    // 2. useStateで設定した値がimgタグのsrc属性に設定されていること


// --------------------------------
// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {useState} from 'react';

/**
 * 
 * @type {React.FC}
 */


export const App = () => {
  
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  return (
    <header>
      <h2>Dog アプリ</h2>
      <article>犬の画像を表示するサイトです</article>
      <img src= {dogUrl} />
      <button onClick={() => setDogUrl}>
        Click me
      </button>
    </header>
  );
}
// --------------------------------

// -------------------
// Station 6
// -------------------
export const App = () => {
  
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  
  function setDogUrl () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((apiData) => (img.src = apiData.message));
  }

  return (
    <header>
      <h2>Dog アプリ</h2>
      <article>犬の画像を表示するサイトです</article>
      <img src= {dogUrl} alt='' id="image"/>
      <button onClick={() => setDogUrl()}>
        Click me
      </button>
    </header>
  );
}
// -----------------------------------------------

// -----------------------------------------------

// -----------------------------------------------
