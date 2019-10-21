import { generateOddInputs } from '../input_generator/input_generator';
import { bruteForce } from '../main_problem/bruteforce';
import { printInput } from './utils/printInput';
import { printOutput } from './utils/printOutput';

export default function test(): void {
    console.log("======> FIFTH TEST: main problem, brute force");

    const n = 7;
    const tests = generateOddInputs(n);

    let i = 3;
    for (const test of tests) {
        console.log('====> TEST: n = ' + i);
        for (const input of test) {
            console.log('input: ', printInput(input));
            console.log('result: ', printOutput(bruteForce(input)));
        }
        i += 2;
    }

    console.log("======> END FIFTH TEST");
}