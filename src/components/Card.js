import React from 'react';
import '../Card.css';

const MonsterCard = ({ monster }) => {
  console.log(monster);
  const actions = monster.actions;
  return (
    <div className="monster-card">
      <img src={monster.image} alt={monster.name} className="monster-image" />
      <div className="monster-details">
        <h2 className="monster-name">{monster.name}</h2>
        <p className="monster-description">{monster.desc_short}</p>
        <p className="monster-description">{monster.desc_long}</p>
        <div className="monster-stats">
          <p><strong>AC:</strong> {monster.ac}&emsp;&emsp;&emsp;
          <strong>HP:</strong> {monster.hp}</p>
          <p><strong>Speed:</strong> {monster.speed}</p>
          <div className="monster-attributes">
            <p><strong>STR:</strong> {monster.str}&emsp;
            <strong>DEX:</strong> {monster.dex}&emsp;
            <strong>CON:</strong> {monster.con}&emsp;
            <strong>INT:</strong> {monster.int}&emsp;
            <strong>WIS:</strong> {monster.wis}&emsp;
            <strong>CHA:</strong> {monster.cha}</p>
          </div>

          {monster.saves && <p><strong>Saving Throws:</strong> {monster.saves}</p>}
          {monster.skills && <p><strong>Skills:</strong> {monster.skills}</p>}
          {monster.res && <p><strong>Damage Resistances:</strong> {monster.res}</p>}
          {monster.senses && <p><strong>Senses:</strong> {monster.senses}</p>}
          {monster.lang && <p><strong>Languages:</strong> {monster.lang}</p>}
          {monster.effects && <p>{monster.effects}</p>}
          <br/>

          <p><h2>ACTIONS</h2></p>
          <div className="monster-actions">
            {actions.map((action) => (
              <p><strong><i>{action.name}</i>: </strong>{action.desc}<br/><br/></p>
            ))}
          </div>
          {monster.reactions && <p><h2>REACTIONS</h2></p>}
          {monster.reactions && <p>{monster.reactions}</p>}
        </div>
      </div>
    </div>
  );
};

export default MonsterCard;
