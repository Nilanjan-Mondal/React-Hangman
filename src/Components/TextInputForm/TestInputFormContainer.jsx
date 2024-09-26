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
        console.log("Form Submited", value);
        if(value) {
            navigate("/play");
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