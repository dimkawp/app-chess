import React, { useEffect, useState } from 'react';
// components
import AppContainer from './components/containers/app';
import BoardComponent from './components/elements/board';
// libs
import { Board } from './libs/chess/Board';
// styles
import './assets/main.scss';

const App = () => {
    const N = 5;
    const [board, setBoard] = useState(null);

    useEffect(() => {
        const newBoard = new Board(N);
        newBoard.initCells()
        newBoard.addAllFigures()
        setBoard(newBoard)
    }, [])

    console.log(board)

    return (
        <AppContainer>
            {board && <BoardComponent size={N} board={board} setBoard={setBoard} />}
        </AppContainer>
    );
}

export default App;
