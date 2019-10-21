import { Element } from '../../interfaces';

export function printOutput(output: Element[]): number[] {
    return output
        .map( ({index}) => index )
}