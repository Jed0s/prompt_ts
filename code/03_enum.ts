// ENUM - вспомогательная сущность, которая позволяют лучше структурировать код, если присутствуют однотипные элементы

enum Specs {
    Warrior,
    Mage,
    Healer,
    Gnome
}
const jedSpec = Specs.Mage
console.log(jedSpec)
const grishSpec = Specs[0]
console.log(grishSpec)

enum Profs {
    FISHING = 'FISHING',
    COOKING = 'COOKING',
    EXPLORING = 'EXPLORING'
}
const jedProf = Profs.EXPLORING
console.log(jedProf)