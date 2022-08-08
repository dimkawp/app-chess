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
        if (target?.figure?.color === this.color) {
            return false;
        }

        return true;
    }

    moveFigure(target) {
        return true;
    }
}