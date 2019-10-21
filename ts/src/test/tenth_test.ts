import { Element } from '../interfaces';
import { generateEqualInputs } from '../input_generator/input_generator';
import { leftBruteforce, rightBruteforce } from '../secondary_problem/bruteforce';
import { solveLeft, solveRight } from '../secondary_problem/hypothesis';

import { printInput } from './utils/printInput';

interface Problem {
    input: Element[];
    rightOutput: boolean;
    obtainedOutput: boolean;
};

export default function test(): void {
    console.log("======> TENTH TEST: secondary problem, hypothesis compared to expected");

    const n = 12;
    const inputs = generateEqualInputs(n);
    const leftTests: Problem[][] = inputs.map(serie => serie.map(input => ({
        input,
        rightOutput: leftBruteforce(input),
        obtainedOutput: solveLeft(input)
    })));
    const rightTests: Problem[][] = inputs.map(serie => serie.map(input => ({
        input,
        rightOutput: rightBruteforce(input),
        obtainedOutput: solveRight(input)
    })));

    let i: number;
    
    console.log('=====> LEFT TESTS');
    i = 2;
    for (const serie of leftTests) {
        console.log('====> N: ', i);
        const different = serie.filter(problem => problem.obtainedOutput !== problem.rightOutput);
        if (different.length) {
            different.forEach(problem => {
                console.log('===> CASE');
                console.log('input: ', printInput(problem.input));
                console.log('expected: ', problem.rightOutput);
                console.log('obtained: ', problem.obtainedOutput);
            });
        }
        i += 2;
    }

    console.log('=====> RIGHT TESTS');
    i = 2;
    for (const serie of rightTests) {
        console.log('====> N: ', i);
        const different = serie.filter(problem => problem.obtainedOutput !== problem.rightOutput);
        if (different.length) {
            different.forEach(problem => {
                console.log('===> CASE');
                console.log('input: ', printInput(problem.input));
                console.log('expected: ', problem.rightOutput);
                console.log('obtained: ', problem.obtainedOutput);
            });
        }
        i += 2;
    }

    console.log("======> END TENTH TEST");
}