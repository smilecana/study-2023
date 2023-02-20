import { useState, memo, useCallback } from "react"
import { Child1 } from "./components/Child1"
import { Child4 } from "./components/Child4"

export const App1 = memo(() => {
  console.log("App 랜더링");
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  }
  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      {/* Props로 함수 설정 */}
      <Child1 onClickReset = {onClickReset}/>
      <Child4 />

    </>
  )
});

//

export default App1;
