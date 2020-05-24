import stringToNumber from '../src/index.js';
import { findBy } from "../src/index.js";
//task 1
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
//task 2
test("find name = урон", () => {
    const finder = findBy('name', 'урон');
    const result = [
        { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
        { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
        { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    ].filter(finder);
    const expected = [{
        name: 'урон',
        type: 'help',
        description: 'Страница описания элемента интерфейса'
    }]
    expect(result).toEqual(expected);
})