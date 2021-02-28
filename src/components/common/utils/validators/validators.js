
export const requiredField = (value) => {
    if (value) {
        return undefined;
    }
    return "Field is required";
}

export const maxLength = (max) => (value) => {
    if (value.length > max) {
        return `Max lenght is ${max} symbols`
    }
    return undefined;
}