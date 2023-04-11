type GenericPrint = {
    <T>(arr: T[]): void
}

const genericPrint: GenericPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

genericPrint([1, 2, 3])
genericPrint([true, false, true])
genericPrint([1, true, "hi"])