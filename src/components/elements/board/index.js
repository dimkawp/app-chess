import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
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

    }, [selectCell, board]);

    useEffect(() => {
        if (board.winner) {
            Modal.success({
                content: <WinnerContent winner={board.winner} />,
                onOk() {
                    window.location.reload();    
                }
            });
        }
    }, [board.winner, currentPlayer])

    const actionsSelect = (item) => {
        if (selectCell && selectCell !== item && selectCell.figure?.canMove(item)) {
            selectCell.moveFigure(item, currentPlayer);
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

const WinnerContent = ({ winner }) => {
    return (
        <div className='winner-content'>
            <img src={winner.logo} alt="logotype" />
            {`${winner.name} get been win`}
        </div>
    )
}