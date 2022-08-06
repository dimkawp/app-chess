import React, { useState } from 'react';
// components
import CellItem from '../cell';
// styles
import './style.scss';

const BoardComponent = ({ size, board, setBoard }) => {
    const [selectCell, setSelectCell] = useState(null);

    const actionsSelect = (item) => {
        if (selectCell && selectCell !== item && selectCell.figure?.canMove(item)) {
            selectCell.moveFigure(item);
            setSelectCell(null);
        } else {
            setSelectCell(item);
        }
      
        if (item.figure?.id === selectCell?.figure?.id) {
            setSelectCell(null);
        }
    }

    return (
        <div className='boarder' style={{ width: `${size * 200}px`}}>
        {board.cells.map((row, index) => {
            return <React.Fragment key={index}>
            {row.map((cell) => {
                return <CellItem 
                        key={cell.id}
                        cell={cell}
                        selected={cell.id === selectCell?.id ? true : false} 
                        actionsSelect={actionsSelect} />
            })}
        </React.Fragment>
        })}
    </div>
    )
}

export default BoardComponent

