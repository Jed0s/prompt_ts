interface IPet {
    name: string
    age: number
    owner: string | undefined
    petType: string
}

type IPetKeys = keyof IPet // name, age, owner, petType
let flipper: IPetKeys = 'owner'
// flipper = 'location' (ошибка)


type Building = {
    location: string
    coast: number
    dateCreate: Date
    type: string
}

type Museum = Exclude<keyof Building, 'type'> // создаем новый тип по типу Building, но без type
type School = Pick<Building, 'location' | 'dateCreate'> // создаем новый тип, в котором от типа Building копируем типы 'location' & 'dateCreate'
