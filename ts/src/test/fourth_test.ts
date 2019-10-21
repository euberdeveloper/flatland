import { generateOddInputs } from '../input_generator/input_generator';
import { print } from './utils/printJSON';

export default function test(): void {
    console.log("======> FOURTH TEST: generate odd inputs");

    const test = 7;

    console.log('===> TEST');
    console.log('length: ', test);
    console.log('result: ', print(generateOddInputs(test)));

    console.log("======> END FOURTH TEST");
}