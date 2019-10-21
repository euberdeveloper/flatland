import { Element } from '../interfaces';

export function leftBruteforce(data: Element[]): boolean {
    let result = false;
    // If data is empty, it can be erased 
    if (data.length === 0) {
        result = true;
    }
    // Else if data finishes in ><, it cannot be erased
    else if (data.length === 2) {
        result = (data[1].value === '<');
    }
    // Else simplyfy data
    else if (data.length > 2) {
        const n = (data[data.length - 1].value === '<') ? data.length : data.length - 1;
        for (let i = 1; i < n && !result; i++) {
            switch (data[i].value) {
                case '>':
                    result = leftBruteforce([...data.slice(0, i), ...data.slice(i + 2)]);
                    break;
                case '<':
                    result = leftBruteforce([...data.slice(0, i - 1), ...data.slice(i + 1)]);
                    break;
            }
        }
    }
    return result;
} 

export function rightBruteforce(data: Element[]): boolean {
    let result = false;
    // If data is empty, it can be erased 
    if (data.length === 0) {
        result = true;
    }
    // Else if data finishes in ><, it cannot be erased
    else if (data.length === 2) {
        result = (data[0].value === '>');
    }
    // Else simplyfy data
    else if (data.length > 2) {
        const start = (data[0].value === '>') ? 0 : 1;
        for (let i = start; i < data.length - 1 && !result; i++) {
            switch (data[i].value) {
                case '>':
                    result = rightBruteforce([...data.slice(0, i), ...data.slice(i + 2)]);
                    break;
                case '<':
                    result = rightBruteforce([...data.slice(0, i - 1), ...data.slice(i + 1)]);
                    break;
            }
        }
    }
    return result;
} 