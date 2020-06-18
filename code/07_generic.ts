// generic in TS == template in C++

const multiSix: Array<number> = [6, 12, 18, 24, 30, 36]
const multiFBI: Array<string> = ['fbi', 'ibf', 'bif', 'fib']

function reverse<T>(multiX: T[]): T[] {
    return multiX.reverse()
}

reverse(multiSix)
reverse(multiFBI)