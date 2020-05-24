import stringToNumber from '../src/index.js';
// import {sortHealth} from "../src/index.js"; 

test("get number from string", () => {
    const result = stringToNumber("45");
    const expected = 45;
    expect(result).toBe(expected);
})
test("get error from string", () => {
    const result = stringToNumber("eleven");
    const expected = "incorrectly";
    expect(result).toBe(expected);
})
// test("health < 15", () => {
//     const result = healthMonitor({ name: 'Маг', health: 10 });
//     const expected = "critical";
//     expect(result).toBe(expected);
// })

// test("sort descending", () => {
//     let list = [
//         { name: 'мечник', health: 10 },
//         { name: 'маг', health: 100 },
//         { name: 'лучник', health: 80 },
//     ];
//     const result = sortHealth(list);
//     const expected = [
//         { name: 'маг', health: 100 },
//         { name: 'лучник', health: 80 },
//         { name: 'мечник', health: 10 },
//     ];
//     expect(result).toEqual(expected);
// })