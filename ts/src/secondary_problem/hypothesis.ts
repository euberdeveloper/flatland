import { Collapses } from '../interfaces';

// If it ends with < or has in an equal position <> returns true
export const solveLeft: Collapses = data => {
    let result = false;
    if (data[data.length - 1].value === '<') {
        result = true;
    }
    for (let i = 1; i < data.length - 1 && !result; i += 2) {
        if (data[i].value === '<' && data[i + 1].value === '>') {
            result = true;
        }
    }
    return result;
}

// If it begins with > or has in an equal position <> returns true
export const solveRight: Collapses = data => {
    let result = false;
    if (data[0].value === '>') {
        result = true;
    }
    for (let i = 1; i < data.length - 1 && !result; i += 2) {
        if (data[i].value === '<' && data[i + 1].value === '>') {
            result = true;
        }
    }
    return result;
}