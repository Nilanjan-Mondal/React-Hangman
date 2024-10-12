import { useSearchParams, useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom"

function PlayGame() {

    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text")); // this is method of query params

    // const {text} = useParams() // this method is for path params

    const {state} = useLocation()


    return (
        <>
            {/* <h1>Play Game {text} </h1> */}
            <h1>Play Game {state.wordSelected} </h1>
            <Link to='/start' className="text-blue-500" >Start Game Link</Link>
        </>
    )
}

export default PlayGame