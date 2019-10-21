import { generateInputFromString } from '../input_generator/input_generator';

export default function test(): void {
    console.log("======> SECOND TEST: generate data from string");

    const tests: string[] = [
        '><>',
        '>><<<',
        '<<><<><><'
    ];

    for (const test of tests) {
        console.log('===> TEST');
        console.log('input: ', test);
        console.log('result: ', generateInputFromString(test));
    }

    console.log("======> END SECOND TEST");
}