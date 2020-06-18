interface NPC {
    readonly id: string // только для чтения
    name: string
    role?: string // необязательный параметр
    spawn: {
        height: number
        width: number
    }
}

const doryn: NPC = {
    id: '1',
    name: 'Doryn',
    spawn: {
        height: 20,
        width: 100
    }
}
doryn.role = 'friend'

const flasi = {} as NPC // flasi имеет те же свойства, что и NPC
const lofi = <NPC>{}

interface Companion extends NPC { // наследование от NPC
    doAction: () => boolean
}

const bleap: Companion = {
    id: '10',
    name: 'Bleap',
    spawn: {
        height: 400,
        width: 300
    },
    doAction(): boolean {
        return true ? true : false
    }
}


interface IQuest { // название с 'I' в начале говорит о принадлежности к типу interface
    npcHead: string
    getInfo(name: string): string
}

const username: string = 'jed'
class QLetsFight implements IQuest { // имплементация ??
    name = username
    npcHead: string = bleap.name
    getInfo(name: string): string {
        this.name = name
        return `Let me say you something, ${name}.`
    }
}


interface Stats {
    [key: string]: number
}

const jedStats: Stats = {
    'health': 390,
    'manna': 3900,
    'stamina': 39,
    'strength': 3.9
}