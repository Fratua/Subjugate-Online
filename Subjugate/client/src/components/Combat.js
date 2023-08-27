import React, { useState, useEffect } from 'react';
import socket from '../utils/socket';

const Combat = () => {
  const [combatLog, setCombatLog] = useState([]);

  useEffect(() => {
    socket.on('combat-action', (message) => {
      setCombatLog((prevLog) => [...prevLog, message]);
    });

    return () => {
      socket.off('combat-action');
    };
  }, []);

  return (
    <div id="combat-log">
      <h2>Combat Log</h2>
      {combatLog.map((log, index) => (
        <p key={index}>{log}</p>
      ))}
    </div>
  );
};

export default Combat;