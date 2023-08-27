import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('/api/user');
      setUser(response.data);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div id="profile-view">
      <h2>{user.username}'s Profile</h2>
      <p>Level: {user.level}</p>
      <p>Experience: {user.experience}</p>
      <p>Class: {user.characterClass}</p>
      <p>Gold: {user.gold}</p>
      <h3>Skills</h3>
      <ul>
        {user.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3>Inventory</h3>
      <ul>
        {user.inventory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;