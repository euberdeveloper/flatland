export type Value = '<' | '>';
export type Rule = (i: number, data: Element[]) => boolean;
export type Collapses = (data: Element[]) => boolean;

export interface Element {
    index: number;
    value: Value;
}

export interface Solution {
    input: Element[],
    output: Element[]
}

