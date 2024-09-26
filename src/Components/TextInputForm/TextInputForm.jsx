import Button from "../Button/button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({inputType, formSubmitHandler, showHideClickHandler, textInputChangeHandler}) {

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <TextInput
                    type={inputType}
                    label = "Enter a word or a phrase"
                    placeholder="Enter a word or phrase here..."
                    onChangeHandler = {textInputChangeHandler}
                />
            </div>

            <div>
                <Button
                    styleType="Warning"
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={showHideClickHandler}
                />
            </div>

            <div>
                <Button
                    styleType="Primary"
                    type="submit"
                    text="Submit"
                />
            </div>

        </form>
    )
}

export default TextInputForm;