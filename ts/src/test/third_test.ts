import { generateInput } from '../input_generator/input_generator';
import { print } from './utils/printJSON';

export default function test(): void {
    console.log("======> THIRD TEST: generate data with certain size");

    const tests: number[] = [
        3, 5, 7
    ];

    for (const test of tests) {
        console.log('===> TEST');
        console.log('length: ', test);
        console.log('result: ', print(generateInput(test)));
    }

    console.log("======> END THIRD TEST");
}