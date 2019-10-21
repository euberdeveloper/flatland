import { generateEqualInputs } from '../input_generator/input_generator';
import { leftBruteforce, rightBruteforce } from '../secondary_problem/bruteforce';
import { printInput } from './utils/printInput';

export default function test(): void {
    console.log("======> EIGHT TEST: secondary problem, brute force");

    const n = 6;
    const tests = generateEqualInputs(n);

    let i = 2;
    for (const test of tests) {
        console.log('====> TEST: n = ' + i);
        for (const input of test) {
            console.log('input: ', printInput(input));
            console.log('left: ', leftBruteforce(input));
            console.log('right: ', rightBruteforce(input));
        }
        i += 2;
    }

    console.log("======> END EIGHT TEST");
}