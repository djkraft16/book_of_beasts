import React from 'react';
import '../Card.css';

const MonsterCard = ({ monster }) => {
  return (
    <div className="monster-card">
      <img src={monster.image} alt={monster.name} className="monster-image" />
      <div className="monster-details">
        <h2 className="monster-name">{monster.name}</h2>
        <p className="monster-description">{monster.description}</p>
        <div className="monster-stats">
          <p><strong>HP:</strong> {monster.hp}</p>
          <p><strong>AC:</strong> {monster.ac}</p>
          <p><strong>Strength:</strong> {monster.strength}</p>
          <p><strong>Dexterity:</strong> {monster.dexterity}</p>
          <p><strong>Constitution:</strong> {monster.constitution}</p>
          <p><strong>Intelligence:</strong> {monster.intelligence}</p>
          <p><strong>Wisdom:</strong> {monster.wisdom}</p>
          <p><strong>Charisma:</strong> {monster.charisma}</p>
        </div>
      </div>
    </div>
  );
};

export default MonsterCard;
