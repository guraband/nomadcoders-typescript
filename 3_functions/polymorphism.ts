type GenericPrint = <T, V>(arr: T[], b: V) => void


const genericPrint: GenericPrint = (arr, b) => {
    arr.forEach(i => console.log(i, b))
}

genericPrint([1, 2, 3], "hi")
genericPrint([true, false, true], 7)
genericPrint([1, true, "hi"], true)