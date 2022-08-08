import { Figure } from "../Figure";
import { CONSTS } from '../consts';
// img
import blackIcon from '../../../assets/images/k1.png';
import whiteIcon from '../../../assets/images/k2.png';

const { colors, figureNames } = CONSTS;

export class King extends Figure {
    constructor(color, cell) {
        super(color, cell);
        this.logo = color === colors.black ? blackIcon : whiteIcon;
        this.name = figureNames.king;
    }
    
    canMove(target) {
        if  (!super.canMove(target)) {
            return false;
        }
        if  (this.cell.isEmptyByHorizontal(target, false)) {
            return true;
        }
        if  (this.cell.isEmptyByVertical(target, false)) {
            return true;
        }
        if  (this.cell.isEmptyByDiagonal(target, false)) {
            return true;
        }
        return false;
    }

    moveFigure(target) {
        super.moveFigure(target);
    }
}
