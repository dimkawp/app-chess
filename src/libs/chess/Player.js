import { CONSTS } from './consts';
const { colors, figureNames } = CONSTS;

export class Player {
    constructor(color, name) {
        this.id = Math.random();
        this.name = name;
        this.color = color;
    }
}