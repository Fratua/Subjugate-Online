import React, { useState, useEffect } from 'react';
import socket from '../utils/socket';

const Marketplace = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    socket.on('marketplace-update', (updatedItems) => {
      setItems(updatedItems);
    });

    return () => {
      socket.off('marketplace-update');
    };
  }, []);

  return (
    <div id="marketplace-list">
      <h2>Marketplace</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Seller: {item.seller}</p>
            <button onClick={() => socket.emit('purchase-item', item)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marketplace;