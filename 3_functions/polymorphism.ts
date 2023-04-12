type GenericPrint = <T, V>(arr: T[], b: V) => void


const genericPrint: GenericPrint = (arr, b) => {
    arr.forEach(i => console.log(i, b))
}

genericPrint([1, 2, 3], "hi")
genericPrint([true, false, true], 7)
genericPrint([1, true, "hi"], true)

type Player<E> = {
    name: string
    extraInfo: E
}

type SubPlayer = Player<{ age: number }>

const player1: SubPlayer = {
    name: 'kim',
    extraInfo: { age: 20 }
}

const player2: Player<null> = {
    name: 'lee',
    extraInfo: null
}