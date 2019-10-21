import { Element } from '../interfaces';

function canCollapseLeft(data: Element[], i: number, left: number): boolean {
    return (data[i - 1].value === '<') || (i > left);
}

function canCollapseRight(data: Element[], i: number, right: number): boolean {
    return (data[i + 1].value === '>') || (i < right);
}

export function linearSolution(data: Element[]): Element[] {
    let result: Element[] = [];
    const n = data.length;

    let left = n, right = -1;
    for (let i = 1; i < n - 1 && (left === n || right === -1); i += 2) {
        if (left === n && data[i].value === '<' && data[i + 1].value === '>') {
            left = i;
        }
        if (right === -1 && data[n - i - 2].value === '<' && data[n - i - 1].value === '>') {
            right = n - i;
        }
    }

    for (let i = 0; i < n; i += 2) {
        if (i === 0 && canCollapseRight(data, i, right)) {
            result.push(data[i]);
        }
        else if (i === n - 1 && canCollapseLeft(data, i, left)) {
            result.push(data[i]);
        }
        else if (i !== 0 && i !== n - 1 && canCollapseRight(data, i, right) && canCollapseLeft(data, i, left)) {
            result.push(data[i]);
        }
    }

    return result;
}