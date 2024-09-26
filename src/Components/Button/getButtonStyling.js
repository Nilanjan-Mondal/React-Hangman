function getButtonStyling(styleType) {
    if(styleType == "Primary") {
        return "bg-blue-500";
    } else if(styleType == "Secondary") {
        return "bg-gray-500";
    } else if(styleType == "Error") {
        return "bg-red-500";
    } else if(styleType == "Success") {
        return "bg-green-500";
    } else if(styleType == "Warning") {
        return "bg-yellow-500";
    }
}

export default getButtonStyling;