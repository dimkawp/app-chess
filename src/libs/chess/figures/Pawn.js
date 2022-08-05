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
    }

    canMove(target) {    
        return true;
    }
}