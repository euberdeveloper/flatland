export function print(obj: any, n = 2): string {
    return JSON.stringify(obj, null, n);
}