function TextInput({type = "text", label, placeholder= "Enter your input here", onChangeHandler}) {
    return (
        <label>
            <div className="text-gray-700">{label}</div>
            <input
                type={type}
                className="px-4 py-2 border-gray-500 rounded-md w-full"
                placeholder = {placeholder}
                onChange={onChangeHandler}  
            />
        </label>
    )
}

export default TextInput;