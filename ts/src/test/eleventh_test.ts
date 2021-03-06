import { Element } from '../interfaces';
import { generateOddInputs } from '../input_generator/input_generator';
import { bruteForce } from '../main_problem/bruteforce';
import { solvedWithBranches } from '../main_problem/solved_with_branches';
import { leftBruteforce, rightBruteforce } from '../secondary_problem/bruteforce';
import { solveLeft, solveRight } from '../secondary_problem/hypothesis';
import { printInput } from './utils/printInput';
import { printOutput } from './utils/printOutput';

interface Problem {
    input: Element[];
    rightOutput: Element[];
    obtainedOutput: Element[];
};

export default function test(): void {
    console.log("======> ELEVENTH TEST: another check to left and right bruteforce");

    const n = 9;
    const inputs = generateOddInputs(n);
    const tests: Problem[][] = inputs.map(serie => serie.map(input => ({
        input,
        rightOutput: bruteForce(input),
        obtainedOutput: solvedWithBranches(input, solveLeft, solveRight)
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

    console.log("======> END ELEVENTH TEST");
}