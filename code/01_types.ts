const isLoading: boolean = false
const num: number = 39
const msg: string = '39'

const numArray: number[] = [3, 9, 39, 93]
const words: string[] = ['Just', 'Do', 'It']

const numArray2: Array<number> = [3, 9, 39, 93]

const contact: [string, number] = ['Contact Name', 393993] // tuple - массив с несколькими типами данных

let changedTypeVar: any = 39 // any - если может появиться необходимость в дальнейшем поменять тип данных
changedTypeVar = 'Now it\'s 39'

function saySomething(msg: string): void {
    console.log(msg)
}
saySomething('Say 39')

function throwError(msg: string): never {
    throw new Error(msg)
}

function infinite(): never {
    while(true) {
        console.log('Here we go again')
    }
}

type newID = string // type - создание своих типов данных
const id: newID = '7fbv08d7b7564db9d9dbd2df7'

type sessionID = string | number
const SID1: sessionID = 39
const SID2 : sessionID = '3r9b'

type uselessType = string | null | undefined