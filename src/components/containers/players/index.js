import React, { useState } from 'react';
import { Button, Descriptions, List, Drawer  } from 'antd';
// styles
import './style.scss';

const PlayersContainer = ({ firstPlayer, secondPlayer, currentPlayer }) => {
    return (
        <Descriptions title={`Game Info current - ${currentPlayer?.name}`} className='players-container'>
            <Descriptions.Item label="First Player">
                <ModalWindow data={firstPlayer} placement={'left'}>First Player info</ModalWindow>
            </Descriptions.Item>
            <Descriptions.Item label="Second Player">
                <ModalWindow data={secondPlayer} placement={'right'}>Second Player info</ModalWindow>
            </Descriptions.Item>
        </Descriptions>
    )
}

export default PlayersContainer

const ModalWindow = ({ data, placement, children }) => {
    const [visible, setVisible] = useState(false);
    
    const showDrawer = () => {
        setVisible(true);
    };
    
    const onClose = () => {
        setVisible(false);
    };
  
    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                {children}
            </Button>
            <Drawer
                title={`Player info ${data?.name}`}
                placement={placement}
                closable={false}
                onClose={onClose}
                visible={visible}
       
            >
                <List
                    itemLayout="horizontal"
                    dataSource={data?.logList}
                    renderItem={item => (
                        <List.Item.Meta
                            title={`${item.name}`}
                            description={`from ${item.from.x}/${item.from.y} to ${item.to.x}/${item.to.y}`}
                        />
                    )}
                />
            </Drawer>
        </>

    );
}