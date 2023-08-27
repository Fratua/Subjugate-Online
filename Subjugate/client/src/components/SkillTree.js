import React, { useState, useEffect } from 'react';

const SkillTree = ({ user }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/api/skills')
      .then(response => response.json())
      .then(data => setSkills(data));
  }, []);

  const handleSkillUpgrade = (skillId) => {
    fetch(`/api/skills/${skillId}/upgrade`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user.id }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setSkills(skills.map(skill => 
          skill.id === skillId ? { ...skill, level: skill.level + 1 } : skill
        ));
      } else {
        alert(data.message);
      }
    });
  };

  return (
    <div id="skill-tree">
      <h2>Skill Tree</h2>
      {skills.map(skill => (
        <div key={skill.id}>
          <h3>{skill.name}</h3>
          <p>Level: {skill.level}</p>
          <button onClick={() => handleSkillUpgrade(skill.id)}>Upgrade</button>
        </div>
      ))}
    </div>
  );
};

export default SkillTree;