import { Element } from '../../interfaces';

export function printInput(input: Element[]): string {
    return input
        .map(({value}) => value)
        .join(' ');
}