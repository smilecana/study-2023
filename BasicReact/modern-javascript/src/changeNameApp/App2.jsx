import {useContext} from "react"
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App2 = () => {
    //Context안의 isAdmin과 업데이트 함수를 얻는다.
    const {isAdmin, setIsAdmin} = useContext(AdminFlagContext);

    //[전환] 클릭 시
    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return(
        <div>
            {/*관리자 플래그가 true일 때와 그렇지 않을 때 문자열 출력 구분 */}
            {isAdmin? <span>관리자입니다</span> : <span>관리자가 아닙니다</span>}
            <button onClick={onClickSwitch}>전환</button>
            <Card isAdmin = {isAdmin}/>
        </div>
    )
}