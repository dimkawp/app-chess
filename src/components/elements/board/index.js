import React, { useState } from 'react'
// styles
import './style.scss';

const BoardComponent = ({ size, board, setBoard }) => {
    const [selectCell, setSelectCell] = useState(null);

    const actionsSelect = (item) => {
        setSelectCell(item);
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

const CellItem = ({ cell, selected, actionsSelect }) => {
    return (
        <div className={`cell ${cell.color.toLowerCase()} ${selected ? 'selected' : ''} ${cell.available ? 'availible' : ''}`} onClick={() => actionsSelect(cell)}>
            <span className='cord'>{cell.x}/{cell.y}</span>
            {cell.warning && 'x'}
            {cell.figure && <img src={cell.figure?.logo} alt="logo" />}    
        </div>
    )
}