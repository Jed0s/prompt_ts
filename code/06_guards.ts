// Guard - вспомогательная конструкция, которая позволяет работать с типами (?)

function numIdentifier(x: number | string) {
    if (typeof x === 'number') {
        return x.toFixed(2) // устанавливает кол-во символов после запятой
    }
    return x.trim() // убирает пробелы
}


class Frontend {
    amountWorkers = 5
    task = 'Do front, do nav, do button'
    askBack = 'Where is my response?'
}
class Backend {
    amountWorkers = 10
    task = 'Connect to the server, make host secure, handle user info'
    askFront = 'What info do you need?'
}

function askWho(whoType: Frontend | Backend) {
    if (whoType instanceof Frontend) { // instanceof - 'содержится в'
        return { newAsk: whoType.askBack }
    }
    return { newAsk: whoType.askFront }
}


type skill = 'junior' | 'middle' | 'senior'
function setSkillType(type: skill) {
    console.log(type)
}
setSkillType('junior')
setSkillType('middle')
// setSkillType('trainee') // данного типа не существуе -> ошибка