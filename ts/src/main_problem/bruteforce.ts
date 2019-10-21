import { Element } from '../interfaces';

function _bruteForce(data: Element[], result: Element[]): void {
    const size = data.length;
    // If there is only one element in the queue, push it in the result
    if (size == 1) {
        result.push(data[0]);
    }
    // Otherwise try every combination
    else if (size > 1) {
        // Cicle on every element that can be selected
        for (let i = 1; i < size - 1; i++) {
            switch (data[i].value) {
                case '>':
                    // Select all elements without the i and the i + 1
                    _bruteForce([...data.slice(0, i), ...data.slice(i + 2)], result);
                    break;
                case '<':
                    // Select all elements without the i and the i - 1
                    _bruteForce([...data.slice(0, i - 1), ...data.slice(i + 1)], result);
                    break;
            }
        }
    }
}

export function bruteForce(data: Element[]): Element[] {
    let result: Element[] = [];
    // Fills the result
    _bruteForce(data, result);
    // Remove all duplicates in the result
    return result.filter((val, index, arr) => arr.indexOf(val) === index);
}