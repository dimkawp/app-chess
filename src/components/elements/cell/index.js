import React from 'react';
import classnames from 'classnames';
// styles
import './style.scss';

const CellItem = ({ cell, selected, actionsSelect }) => {

    const classes = classnames('cell', {selected: selected, availible: cell.available}, cell.color.toLowerCase());

    return (
        <div className={classes} onClick={() => actionsSelect(cell)}>
            <span className='cord'>{cell.x}/{cell.y}</span>
            {cell.warning && 'x'}
            {cell.figure && <img src={cell.figure?.logo} alt={cell.figure.name} />}    
        </div>
    )
}

export default CellItem;