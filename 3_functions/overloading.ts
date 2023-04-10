type Add2 = {
    (a: number, b: number): number
    (a: number, b: string): number
}

const add2: Add2 = (a, b) => {
    if (typeof b === "string") {
        return a
    }
    return a + b
}

console.log(add2(1, "a"))
console.log(add2(1, 2))

type Add3 = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
}

const add3: Add3 = (a, b, c?: number) => {
    if (c) return a + b + c
    return a + b
}

console.log(add3(1, 2))
console.log(add3(1, 2, 3))