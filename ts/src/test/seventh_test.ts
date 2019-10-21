import { generateEqualInputs } from '../input_generator/input_generator';
import { print } from './utils/printJSON';

export default function test(): void {
    console.log("======> SEVENTH TEST: generate equal inputs");

    const test = 6;

    console.log('===> TEST');
    console.log('length: ', test);
    console.log('result: ', print(generateEqualInputs(test)));

    console.log("======> END SEVENTH TEST");
}