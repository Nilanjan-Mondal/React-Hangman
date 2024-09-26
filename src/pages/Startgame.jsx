
import { Link } from "react-router-dom";
import TextInputFormContainer from "../Components/TextInputForm/TestInputFormContainer";

function StartGame() {
    return(
        <>
            <h1>Start Game</h1>
            <TextInputFormContainer />
            {/* <Link to='/play' className="text-blue-500" >Play Game Link</Link> */}
        </>
    )
}

export default StartGame;