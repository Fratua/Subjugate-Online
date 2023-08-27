import React, { useState, useEffect } from 'react';
import socket from '../utils/socket';

const Trade = () => {
  const [tradeItems, setTradeItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    socket.on('trade-request', (items) => {
      setTradeItems(items);
    });
  }, []);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const handleTradeAccept = () => {
    if (selectedItem) {
      socket.emit('trade-request', selectedItem);
    }
  };

  return (
    <div id="trade-window">
      <h2>Trade Window</h2>
      <ul>
        {tradeItems.map((item, index) => (
          <li key={index} onClick={() => handleItemSelect(item)}>
            {item.name}
          </li>
        ))}
      </ul>
      <button onClick={handleTradeAccept}>Accept Trade</button>
    </div>
  );
};

export default Trade;