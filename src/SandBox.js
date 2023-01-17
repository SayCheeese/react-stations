useEffect(() => {
	if (isFR.current) return;
	console.log("useEffect 1");
}, [state])

useEffect(() => {
	if (isFR.current) return;
	console.log("useEffect 2");
}, [state])

// 最後のuseEffectなので、isFR.current=falseとする。
useEffect(() => {
	if (isFR.current) {
		isFR.current = false;
		return;
	}
	console.log("useEffect 3");
}, [state])



// ------ //
// https://koke-tech-blog.vercel.app/posts/lmxLA05NB5Y3QF5c6iPc
// ------ //
import { useRef, useEffect, useState } from "react";
const Test = () => {

  // isFR (isFirstRender) をtrueで初期化。
  const isFR = useRef(true);

  const [state, setState] = useState(0);

  useEffect(() => {
    // 初回レンダリング時はisFRをfalseに変更して、return。
    if (isFR.current) {
      isFR.current = false;
      return;
    }

    // 2回目以降に実行される。
    console.log(state);
  }, [state]);

  return (
    <button
      onClick={() => {
        console.log("clicked");
        setState(state + 1);
      }}
    >
      Click
    </button>
  );
};