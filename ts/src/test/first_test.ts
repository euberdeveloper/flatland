import { repeatedPermutations } from '../input_generator/repeated_permutations';

interface Dataset {
    symbols: any[];
    length: number;
}

type Datasets = Dataset[];

export default function test(): void {
    console.log("======> FIRST TEST: permutations");

    const tests: Datasets = [
        {
            symbols: [ 0, 1, 2, 3 ],
            length: 3
        },
        {
            symbols: [ 'a', 'b', 'c' ],
            length: 4
        },
        {
            symbols: [ '<', '>' ],
            length: 4
        }
    ];

    for (const {symbols, length} of tests) {
        console.log('===> TEST');
        console.log('length: ', length);
        console.log('symbols: ', symbols);
        console.log('result: ', repeatedPermutations(symbols, length));
    }

    console.log("======> END FIRST TEST");
}