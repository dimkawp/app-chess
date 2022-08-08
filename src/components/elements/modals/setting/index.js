import React, { useState } from 'react';
import { Modal, Input, Radio } from 'antd';

const ModalSettings = ({ NewPlayer, setFirstPlayer, setSecondPlayer, size, setSize }) => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [firstPlayerName, setFirstPlayerName] = useState('');
    const [secondPlayerName, setSecondPlayerName] = useState('');
    
    const handleOk = () => {
        setFirstPlayer(new NewPlayer('WHITE', firstPlayerName ? firstPlayerName : 'Player 1'))
        setSecondPlayer(new NewPlayer('BLACK', secondPlayerName ? secondPlayerName : 'Player 2'))

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

    const onChangeSize = (e) => {
        setSize(e.target.value);
    }
  
    return (
        <Modal title="Game Setting" visible={isModalVisible} onOk={handleOk} cancelButtonProps={null}>
            <Input onChange={(e) => setName(e, 'player1')} addonBefore={'Player 1'}/>
            <Input onChange={(e) => setName(e, 'player2')} addonBefore={'Player 2'}/>
            <Radio.Group onChange={onChangeSize} value={size}>
                <Radio value={5}>5 x 5</Radio>
                <Radio value={8}>8 x 8</Radio>
            </Radio.Group>
        </Modal>
    );
}

export default ModalSettings;