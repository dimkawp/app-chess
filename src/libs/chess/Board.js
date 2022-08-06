import { Cell } from './Cell';
import { King } from './figures/King';
import { Pawn } from './figures/Pawn';
import { Rook } from './figures/Rook';
import { CONSTS } from './consts';

const { colors } = CONSTS;

export class Board {
    constructor(n) {
        this.cells = [];
        this.n = n;
    }

    initCells() {
        for (let i = 0; i < this.n; i++) {
            const row = [];
            for (let j = 0; j < this.n; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push( new Cell(this, j, i, colors.black, null))
                } else {
                    row.push(new Cell(this, j, i, colors.white, null))
                }
            }
            this.cells.push(row);
        } 
    }

    getCell(x, y) {
        return this.cells[y][x]
    }

    addPawns() {
        for (let i = 0; i < this.n; i++) {
            new Pawn(colors.black, this.getCell(i, this.n - (this.n - 1)))
            new Pawn(colors.white, this.getCell(i, this.n - 2))
        }
    }

    addKings() {
        let centerPosition = Math.floor(this.n / 2);
        new King(colors.black, this.getCell(centerPosition, 0))
        new King(colors.white, this.getCell(centerPosition, this.n - 1))
    }

    addRooks() {
        new Rook(colors.black, this.getCell(0, 0))
        new Rook(colors.black, this.getCell((this.n - 1), 0))

        new Rook(colors.white, this.getCell(0, (this.n - 1)))
        new Rook(colors.white, this.getCell((this.n - 1), (this.n - 1)))  
    }

    addAllFigures() {
        this.addPawns();
        this.addKings();
        this.addRooks();
    }

    actionCell(selectCell) {
        
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];

            for (let j = 0; j < this.cells.length; j++) {
                const target = row[j];
                target.available = !!selectCell?.figure?.canMove(target);
            }
        }
    }
}

