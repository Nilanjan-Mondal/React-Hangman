import { useNavigate } from "react-router-dom";
import TextInputForm from "./TextInputForm";
import { useEffect, useState } from "react";

function TextInputFormContainer() {
    
    // let inputType = "password"; // react does not track local variables, so even if the inputType changes it does not update the UI so we use a hook called usestate();

    const [inputType, setinputType] = useState("password");

    const [value, setValue] = useState("");

    const navigate = useNavigate(); 

    function formSubmitHandler(event) {
        event.preventDefault();
        console.log("Form Submited");
        if(value) {
            // navigate(`/play?text=${value}`); // this one is for query params
            // navigate(`/play/${value}`); // this one is for path params
            navigate(`/play`, {state : {wordSelected : value} }); // this is 3rd method where the input is not shown in url but is carried out to the destination page
        }
    } 

    function textInputChangeHandler(event) {
        console.log("Text input changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function showHideClickHandler() {
        console.log("Show Hide button clicked");
        if(inputType == "password") {
            setinputType("text");
        } else {
            setinputType("password");
        }
    }

    return (
        <TextInputForm
            inputType={inputType}
            formSubmitHandler = {formSubmitHandler}
            showHideClickHandler = {showHideClickHandler}
            textInputChangeHandler = {textInputChangeHandler}
        />
    );
}

export default TextInputFormContainer;