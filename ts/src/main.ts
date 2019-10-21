import firstTest from './test/first_test';
import secondTest from './test/second_test';
import thirdTest from './test/third_test';
import fourthTest from './test/fourth_test';
import fifthTest from './test/fifth_test';
import sixthTest from './test/sixth_test';
import seventhTest from './test/seventh_test';
import eightTest from './test/eigth_test';
import ninthTest from './test/ninth_test';
import tenthTest from './test/tenth_test';
import eleventhTest from './test/eleventh_test';
import twelfthTest from './test/twelfth_test';

const N = +process.argv[2] - 1 || 0;

const TESTS = [
    firstTest,
    secondTest,
    thirdTest,
    fourthTest,
    fifthTest,
    sixthTest,
    seventhTest,
    eightTest,
    ninthTest,
    tenthTest,
    eleventhTest,
    twelfthTest
];

TESTS[N]();