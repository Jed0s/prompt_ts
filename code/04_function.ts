interface BattleCalc {
    firstHit: number | undefined
    secondHit: number | undefined
}

interface BattleSuccess extends BattleCalc {
    result: string
}

function battle(): BattleCalc
function battle(first: number): BattleSuccess
function battle(second: number): BattleSuccess
function battle(first: number, second: number): BattleCalc

function battle(first?: number, second?: number) {
    if (!first && !second) {
        return {firstHit: 0, secondHit: 0}
    }
    if (first && !second) {
        return {firstHit: first, secondHit: second, result: 'First player won'}
    }
    if (!first && second) {
        return {firstHit: first, secondHit: second, result: 'Second player won'}
    }
    return {firstHit: first, secondHit: second}
}

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function doTest(amount: number) {
    console.log(`Test for amount ${amount}`)
    let counter: number = 0
    let firstHit: number | undefined
    let secondHit: number | undefined
    while (counter < amount) {
        firstHit = getRandom(counter)
        secondHit = getRandom(counter)
        if (firstHit < 1) {
            firstHit = undefined
        }
        if (secondHit < 1) {
            secondHit = undefined
        }
        console.log(battle(firstHit, secondHit))
        counter++
    }
}

doTest(2)
doTest(5)
doTest(10)