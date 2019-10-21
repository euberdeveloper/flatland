// Generates the repeated permutations of n elements of the given array
export function repeatedPermutations(elements: any[], n: number): any[][] {
    let res = elements.map( val => ([val]) );
    for (let i = 1; i < n; i++) {
        let acc = [];
        for (let j = 0; j < res.length; j++) {
            for (let k = 0; k < elements.length; k++) {
                acc.push([...res[j], elements[k]])
            }
        }
        res = acc;
    }
    return res;
}