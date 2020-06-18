class System {
    readonly name: string
    constructor(readonly version: number, readonly description: string) {}
}

class Script {
    public description: string = 'DESC'
    protected name: string // поле/метод доступно в родительском классе и всех дочерних классах
    private doLog() { // поле/метод доступно только в том классе, в котором объявлено
        let action: string = 'action'
        console.log(action)
    }
}

class HackScript extends Script {
    public setName(name: string): void {
        this.name = name
    }
}

const hack = new HackScript()
hack.setName('Hack1')


abstract class CLocation {
    abstract coordinates(): void
    abstract entertainment(): void
    abstract info(): string
}

class Park extends CLocation {
    coordinates() {
        console.log('(39;93)')
    }
    entertainment() {
        console.log('Not found =(')
    }
    info(): string {
        return `It is a park which will be built in a year.`;
    }
}