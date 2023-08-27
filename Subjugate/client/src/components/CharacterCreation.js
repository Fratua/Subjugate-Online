import React, { useState } from 'react';
import axios from 'axios';

const CharacterCreation = () => {
  const [character, setCharacter] = useState({
    name: '',
    class: '',
    hairstyle: '',
    eyeColor: '',
    armorStyle: '',
    weapon: ''
  });

  const handleChange = (event) => {
    setCharacter({
      ...character,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/characters', character);
      if (response.data.success) {
        // Redirect to game world after successful character creation
        window.location.href = '/world';
      } else {
        // Handle error
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form id="character-creation-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Class:
        <select name="class" onChange={handleChange}>
          <option value="warrior">Warrior</option>
          <option value="mage">Mage</option>
          <option value="archer">Archer</option>
        </select>
      </label>
      <label>
        Hairstyle:
        <input type="text" name="hairstyle" onChange={handleChange} />
      </label>
      <label>
        Eye Color:
        <input type="text" name="eyeColor" onChange={handleChange} />
      </label>
      <label>
        Armor Style:
        <input type="text" name="armorStyle" onChange={handleChange} />
      </label>
      <label>
        Weapon:
        <input type="text" name="weapon" onChange={handleChange} />
      </label>
      <input type="submit" value="Create Character" />
    </form>
  );
};

export default CharacterCreation;