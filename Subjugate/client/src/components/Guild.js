import React, { useState, useEffect } from 'react';
import socket from '../utils/socket';

const Guild = () => {
  const [guildMembers, setGuildMembers] = useState([]);

  useEffect(() => {
    socket.on('guild-update', (members) => {
      setGuildMembers(members);
    });

    return () => {
      socket.off('guild-update');
    };
  }, []);

  return (
    <div id="guild-list">
      <h2>Guild Members</h2>
      <ul>
        {guildMembers.map((member, index) => (
          <li key={index}>
            <p>{member.name}</p>
            <p>Level: {member.level}</p>
            <p>Class: {member.characterClass}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Guild;