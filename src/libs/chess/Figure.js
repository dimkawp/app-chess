import { CONSTS } from './consts';
const { colors, figureNames } = CONSTS;

export class Figure {
    constructor(color, cell) {
        this.id = Math.random();
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = '';
    }

    canMove(target) {
        return true;
    }
}