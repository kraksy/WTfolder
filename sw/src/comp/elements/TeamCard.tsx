// src/components/TeamCard.js
import React from 'react';

const TeamCard = ({ homeTeamLogo, homeTeamScore, awayTeamLogo, awayTeamScore }) => {
  return (
    <div className="team-card">
      <div className="team">
        <img src={homeTeamLogo} alt="Home Team Logo" />
        <p>Home Team Score: {homeTeamScore}</p>
      </div>
      <div className="team">
        <img src={awayTeamLogo} alt="Away Team Logo" />
        <p>Away Team Score: {awayTeamScore}</p>
      </div>
    </div>
  );
};

export default TeamCard;
