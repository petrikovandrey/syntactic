//task 1
export default function stringToNumber(s) {
    try {
        const n = Number(s);
        if (n > 0) {
            return n;
        } else {
            throw ("incorrectly");
        }
    } catch (error) {
        return error;
    }
}
//task 2
export function findBy(key,text) {
    return function (value) {
       return value[key].includes(text); 
    }
}


