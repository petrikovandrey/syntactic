

export default function stringToNumber(s) {
    try {
        const n = Number(s);
        if (n > 0) {
            console.log(n);
            return n;
        } else {
            console.log(n);
            throw("incorrectly");
        }
    } catch (error) {
        return error;
    }
}
