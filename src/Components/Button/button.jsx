import getButtonStyling from "./getButtonStyling";

function Button({text, onClickHandler, styleType = "Primary", type = "button"}) {

    return (
        <button
            onClick = {onClickHandler}
            type={type}
            className = {`px-4 py-2 text-white ${getButtonStyling(styleType)}`}
        >
            {text}
        </button>
    );
}


export default Button;