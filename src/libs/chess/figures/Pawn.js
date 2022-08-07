import { Figure } from "../Figure";
import { CONSTS } from '../consts';
// img
import blackIcon from '../../../assets/images/p1.png';
import whiteIcon from '../../../assets/images/p2.png';

const { colors, figureNames } = CONSTS;

export class Pawn extends Figure {
    constructor(color, cell) {
        super(color, cell);
        this.logo = color === colors.black ? blackIcon : whiteIcon;
        this.name = figureNames.pawn;
        this.isFirstStep = true;
    }

    canMove(target) {
        if  (!super.canMove(target)) {
            return false;
        }

        const move = this.cell.figure?.color === colors.black ? 1 : -1
        const firstMove = this.cell.figure?.color === colors.black ? 2 : -2
        const step = target.y === this.cell.y + move || this.isFirstStep && (target.y === this.cell.y + firstMove)
   
        if  (step
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x, target.y).isEmpty()) {

            const min = Math.min(this.cell.y, target.y);
            const max = Math.max(this.cell.y, target.y);
            
            for (let y = min + 1; y < max; y++) {
                if  (!this.cell.board.getCell(this.cell.x, y).isEmpty()) {
                    return false
                }
            }
            return true;
        }
    
        if  (target.y === this.cell.y + move
                && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
                && this.cell.isEnemy(target)) {
                    return true;
        }
    
        return false;
    }

    moveFigure(target) {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}