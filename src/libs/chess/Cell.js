import { CONSTS } from './consts';
const { colors, figureNames } = CONSTS;

export class Cell {
    constructor(board, x, y, color, figure) {
        this.id = Math.random();
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.warning = false;  
    }
}