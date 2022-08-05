import { Figure } from "../Figure";
import { CONSTS } from '../consts';
// img
import blackIcon from '../../../assets/images/t1.png';
import whiteIcon from '../../../assets/images/t2.png';

const { colors, figureNames } = CONSTS;

export class Rook extends Figure {
    constructor(color, cell) {
        super(color, cell);
        this.logo = color === colors.black ? blackIcon : whiteIcon;
        this.name = figureNames.rook;
    }
    
    canMove(target) {
        return true;
    }
}
