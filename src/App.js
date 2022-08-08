import React, { useEffect, useState } from 'react';
// components
import AppContainer from './components/containers/app';
import BoardComponent from './components/elements/board';
import PlayersContainer from './components/containers/players';
import ModalSettings from './components/elements/modals/setting';
// libs
import Board, { NewPlayer } from './libs/chess/Board';
// styles
import 'antd/dist/antd.css';
import './assets/main.scss';

const App = () => {
    const [board, setBoard] = useState(null);
    const [firstPlayer, setFirstPlayer] = useState(null);
    const [secondPlayer, setSecondPlayer] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState(null);
    const [size, setSize] = useState(5);

    useEffect(() => {
        const newBoard = new Board(size);
        newBoard.initCells();
        newBoard.addAllFigures();
        setBoard(newBoard);
    }, [size]);

    useEffect(() => {
        setCurrentPlayer(firstPlayer)
    }, [firstPlayer]);

    const changeOfCourse = () => {
        if (currentPlayer.color === firstPlayer.color) {
            return setCurrentPlayer(secondPlayer);
        }
        return setCurrentPlayer(firstPlayer)
    }

    return (    
        <AppContainer>
            {<ModalSettings NewPlayer={NewPlayer} setFirstPlayer={setFirstPlayer} setSecondPlayer={setSecondPlayer} size={size} setSize={setSize} />}
            {firstPlayer && secondPlayer && <PlayersContainer size={size} firstPlayer={firstPlayer} secondPlayer={secondPlayer} currentPlayer={currentPlayer} />}
            {board && <BoardComponent 
                        size={size} 
                        board={board} 
                        setBoard={setBoard} 
                        currentPlayer={currentPlayer}
                        changeOfCourse={changeOfCourse}/>}
        </AppContainer>
    );
}

export default App;

