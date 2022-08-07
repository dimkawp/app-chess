import React, { useEffect, useState } from 'react';
// components
import CellItem from '../cell';
// styles
import './style.scss';

const BoardComponent = ({ size, board, setBoard, currentPlayer, changeOfCourse }) => {
    const [selectCell, setSelectCell] = useState(null);
    const [forceUpdate, setForceUpdate] = useState(null);

    useEffect(() => {
        if (board) {
            board.actionCell(selectCell);
            setForceUpdate(Math.random());
        }

      }, [selectCell, board])

    const actionsSelect = (item) => {
        if (selectCell && selectCell !== item && selectCell.figure?.canMove(item)) {
            selectCell.moveFigure(item);
            currentPlayer.setLog({ name: item.figure.name, from: selectCell, to: item })
            setSelectCell(null);
            changeOfCourse();
        } else {
            if (item.figure?.color === currentPlayer.color) {
                setSelectCell(item);
            }
        }

        
        if (item.figure?.id === selectCell?.figure?.id) {
            setSelectCell(null);
        }
    }

    return (
        <div className='boarder' style={{ width: `${size * 10}vw`}}>
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

