import React, { useEffect, useState } from 'react';
import { Button, Modal, Input } from 'antd';
// components
import AppContainer from './components/containers/app';
import BoardComponent from './components/elements/board';
// libs
import Board, { NewPlayer } from './libs/chess/Board';
// styles
import 'antd/dist/antd.css';
import './assets/main.scss';

const App = () => {
    const N = 8;
    const [board, setBoard] = useState(null);
    const [firstPlayer, setFirstPlayer] = useState(null);
    const [secondPlayer, setSecondPlayer] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState(null);

    useEffect(() => {
        const newBoard = new Board(N);
        newBoard.initCells();
        newBoard.addAllFigures();
        setBoard(newBoard);
    }, []);

    useEffect(() => {
        setCurrentPlayer(firstPlayer)
    }, [firstPlayer]);

    const changeOfCourse = () => {
        if (currentPlayer.color === firstPlayer.color) {
            return setCurrentPlayer(secondPlayer)
        }

        return setCurrentPlayer(firstPlayer)
    }

    return (    
        <AppContainer> 
            {true && <ModalWindow setFirstPlayer={setFirstPlayer} setSecondPlayer={setSecondPlayer} />}
            {board && <BoardComponent 
                        size={N} 
                        board={board} 
                        setBoard={setBoard} 
                        currentPlayer={currentPlayer}
                        changeOfCourse={changeOfCourse}/>}
        </AppContainer>
    );
}

export default App;

const ModalWindow = ({ setFirstPlayer, setSecondPlayer }) => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [firstPlayerName, setFirstPlayerName] = useState('');
    const [secondPlayerName, setSecondPlayerName] = useState('');
    
    const handleOk = () => {
        setFirstPlayer(new NewPlayer('WHITE', firstPlayerName))
        setSecondPlayer(new NewPlayer('BLACK', secondPlayerName))

        setIsModalVisible(false);
    };
  
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const setName = (e, init) => {
        switch (init) {
            case 'player1':
                setFirstPlayerName(e.target.value)
                break;
            case 'player2':
                setSecondPlayerName(e.target.value)
                break;
            default:
                break;
        }
    }
  

    return (
        <Modal title="Game Setting" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input onChange={(e) => setName(e, 'player1')} addonBefore={'Player 1'}/>
            <Input onChange={(e) => setName(e, 'player2')} addonBefore={'Player 2'}/>
        </Modal>
    );
}