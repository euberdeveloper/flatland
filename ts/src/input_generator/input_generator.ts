import { Value, Element } from '../interfaces';
import { repeatedPermutations } from './repeated_permutations';

export function generateInput(n: number): Element[][] {
    return (repeatedPermutations(['>', '<'], n) as Value[][])
        .map(v => v.map((value, index) => ({ value, index })));
}

export function generateOddInputs(n: number): Element[][][] {
    return [...Array(n - 1).keys()].map((_, i) => i + 2) /* get array from 1 to n */
        .filter(v => v % 2 !== 0) /* keep only odd numbers */
        .map(v => (repeatedPermutations(['>', '<'], v) as Value[][]) /* get all the permutations for each number **/
            .map(v => v.map((value, index) => ({ value, index })))); /* for every one, parse it to Element */
}

export function generateEqualInputs(n: number): Element[][][] {
    return [...Array(n - 1).keys()].map((_, i) => i + 2) /* get array from 1 to n */
        .filter(v => v % 2 === 0) /* keep only equal numbers */
        .map(v => repeatedPermutations(['>', '<'], v) /* get all the permutations for each number **/
            .map(v => v.map((value, index) => ({ value, index })))); /* for every one, parse it to Element */
}

export function generateInputFromString(str: string): Element[] {
    return [...str].map((value: Value, index: number) => ({ value, index }));
}