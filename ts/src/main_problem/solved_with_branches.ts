import { Element, Collapses } from '../interfaces';

export function solvedWithBranches(data: Element[], left: Collapses, right: Collapses): Element[] {
    let result: Element[] = [];
    const n = data.length;
    for (let i = 0; i < n; i += 2) {
        if ( (i === 0 && right(data.slice(1, n)))
            || (i === n - 1 && left(data.slice(0, n - 1)))
            || ((i !== 0) && (i !== n - 1) && left(data.slice(0, i)) && right(data.slice(i + 1, n))) ) {
            result.push(data[i]);
        }
    }
    return result;
}