import React, { useState } from 'react';
import { Button, Descriptions, List, Drawer  } from 'antd';
// styles
import './style.scss';

const PlayersContainer = ({ size, firstPlayer, secondPlayer, currentPlayer }) => {
    return (
        <Descriptions title={`Game Info, walking now - ${currentPlayer?.name}`} style={{ width: `${size * 10}vw`}}>
            <Descriptions.Item label={`${firstPlayer.name}`}>
                <ModalWindow data={firstPlayer} placement={'left'}>Walking history</ModalWindow>
            </Descriptions.Item>
            <Descriptions.Item label={`${secondPlayer.name}`}>
                <ModalWindow data={secondPlayer} placement={'right'}>Walking history</ModalWindow>
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