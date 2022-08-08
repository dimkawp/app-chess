export class Cell {
    constructor(board, x, y, color, figure) {
        this.id = Math.random();
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
    }

    setFigure(figure) {
        this.figure = figure;
        this.figure.cell = this;
    }

    moveFigure(target, player) {
        if (this.figure && this.figure?.canMove(target)) {
            target?.figure?.name === 'King' && this.board.setWinner(player);
            this.figure.moveFigure(target);
            target.setFigure(this.figure);
            this.figure = null;
        }
    }

    isEmpty() {
        if (this.figure === null) {
            return true;
        }
        return false;
    }

    isEnemy(target) {
        if (target.figure) {
            return this.figure?.color !== target?.figure?.color;
        }
        return false;
    }

    isEmptyByVertical(target, fullRange) {
        if (this.x !== target.x) {
            return false;
        }
    
        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);

        for (let y = min + 1; y < max; y++) {
            if (!this.board.getCell(this.x, fullRange ? y : this.y).isEmpty()) {
                return false;
            }
        }
        return true;
      }
    
      isEmptyByHorizontal(target, fullRange) {
        if (this.y !== target.y) {
          return false;
        }
    
        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);
    
        for (let x = min + 1; x < max; x++) {
            if (!this.board.getCell(fullRange ? x : this.x, this.y).isEmpty()) {
                return false;
            }
        }
        return true;
    }

    isEmptyByDiagonal(target, fullRange) {      
        const absX = Math.abs(target.x - this.x);
        const absY = Math.abs(target.y - this.y);

        if (absY !== absX) {
            return false;
        }
            
        const dy = fullRange ? this.y < target.y ? 1 : -1 : 0;
        const dx = fullRange ? this.x < target.x ? 1 : -1 : 0;
    
        for (let i = 1; i < absY; i++) {
            if (!this.board.getCell(this.x + dx*i, this.y + dy   * i).isEmpty()) {
                return false;
            }
        }
        return true;
      }
}