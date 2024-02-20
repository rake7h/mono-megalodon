const foo = () => {

};

function isValidUSPhoneNumber(phoneNumber: string): boolean {
return /^\+?1?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/.test(phoneNumber);
}

// Function to check if a string is a valid URL
function isValidURL(url: string): boolean {
const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
return urlRegex.test(url);
}

// Function to check if a string contains only alphanumeric characters
function isAlphanumeric(str: string): boolean {
const alphanumericRegex = /^[a-zA-Z0-9]+$/;
return alphanumericRegex.test(str);
}

// Function to check if a string is a valid credit card number (simple check)
function isValidCreditCardNumber(creditCardNumber: string): boolean {
return /^\d{13,19}$/.test(creditCardNumber.replace(/\s/g, ""));
}

// Function to validate a password (at least 8 characters, containing both letters and numbers)
function isValidPassword(password: string): boolean {
return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

// Function to check if an object is empty (has no own properties)
function isEmptyObject(obj: object): boolean {
return Object.keys(obj).length === 0;
}

// Function to check if an array is not empty
function isNonEmptyArray(arr: any[]): boolean {
return Array.isArray(arr) && arr.length > 0;
}

export {foo, isValidURL, isAlphanumeric, isValidUSPhoneNumber, isNonEmptyArray, isEmptyObject, isValidPassword, isValidCreditCardNumber};