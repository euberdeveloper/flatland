import { Element, Rule } from '../interfaces';

// The idea is that if an element is "pointed" by any non of its adiacent elements, it is part of the solution
const RULE_FUNCTION: Rule = (i, data) => {
    const n = data.length;
    if (i === 0 && data[1].value === '>') return true;
    else if (i === n - 1 && data[i - 1].value === '<') return true;
    else if (i !== 0 && i !== n - 1 && data[i - 1].value === '<' && data[i + 1].value === '>') return true;
};

export function firstHypothesis(data: Element[]): Element[] {
    const rule = RULE_FUNCTION;
    let result: Element[] = [];
    if (data.length > 1) {
        for (let i = 0; i < data.length; i += 2) {
            if (rule(i, data)) {
                result.push(data[i]);
            }
        }
    }
    return result;
}