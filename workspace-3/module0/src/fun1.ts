// Function to check if an array is not empty
function isNonEmptyArray(arr: any[]): boolean {
    return Array.isArray(arr) && arr.length > 0;
    }

    export{isNonEmptyArray}