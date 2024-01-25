const foo = () => {

};

function isValidUSPhoneNumber(phoneNumber: string): boolean {
    return /^\+?1?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/.test(phoneNumber);
    }

export {foo, isValidUSPhoneNumber};