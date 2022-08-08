import { CONSTS } from './consts';
// img
import blackIcon from '../../assets/images/k1.png';
import whiteIcon from '../../assets/images/k2.png';
const { colors } = CONSTS;

export class Player {
    constructor(color, name) {
        this.id = Math.random();
        this.name = name;
        this.color = color;
        this.logo = color === colors.white ? whiteIcon : blackIcon;
        this.logList = [];
    }

    setLog(target) {
        this.logList.push(target);
        return;
    }
}