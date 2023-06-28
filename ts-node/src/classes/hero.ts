import powers from '../data/powers';

export class Hero {
    constructor(
        public name: string,
        public idPower: number,
        public age: number
    ) {}

    get power(): string {
        return powers.find( power => power.id === this.idPower)?.description || 'no found';
    }
}