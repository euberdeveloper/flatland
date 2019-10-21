import { Element } from '../interfaces';
import { generateOddInputs } from '../input_generator/input_generator';
import { bruteForce } from '../main_problem/bruteforce';
import { firstHypothesis } from '../main_problem/first_hypothesis';
import { printInput } from './utils/printInput';
import { printOutput } from './utils/printOutput';

interface Problem {
    input: Element[];
    rightOutput: Element[];
    obtainedOutput: Element[];
};

export default function test(): void {
    console.log("======> SIXTH TEST: main problem, first hypothesis compared to brute force");

    const n = 7;
    const inputs = generateOddInputs(n);
    const tests: Problem[][] = inputs.map(serie => serie.map(input => ({
        input,
        rightOutput: bruteForce(input),
        obtainedOutput: firstHypothesis(input)
    })));

    let i: number;

    console.log('===> Are there in the obtained solution elements which should not be in the solution? (false positives)');

    i = 3;
    for (const serie of tests) {
        console.log('====> N: ', i);
        const different = serie.filter(problem => problem.obtainedOutput.some(obtained => !problem.rightOutput.find(right => right.index === obtained.index)));
        if (different.length) {
            different.forEach(problem => {
                console.log('===> CASE');
                console.log('input: ', printInput(problem.input));
                console.log('expected: ', printOutput(problem.rightOutput));
                console.log('obtained: ', printOutput(problem.obtainedOutput));
            });
        }
        i += 2;
    }

    console.log('===> Gives the obtained solution all the elements it should? (is it complete)');

    i = 3;
    for (const serie of tests) {
        console.log('====> N: ', i);
        const different = serie.filter(problem => problem.rightOutput.some(right => !problem.obtainedOutput.find(obtained => right.index === obtained.index)));
        if (different.length) {
            different.forEach(problem => {
                console.log('===> CASE');
                console.log('input: ', printInput(problem.input));
                console.log('expected: ', printOutput(problem.rightOutput));
                console.log('obtained: ', printOutput(problem.obtainedOutput));
            });
        }
        i += 2;
    }

    console.log("======> END SIXTH TEST");
}