// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import TeamCard from './components/TeamCard';

function App() {
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState('boston');

  useEffect(() => {
    const fetchTeams = async () => {
      const options = {
        method: 'GET',
        url: 'https://api-basketball.p.rapidapi.com/teams',
        params: { search },
        headers: {
          'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
          'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setTeams(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeams();
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div>
        <div className="header">
          <input type="text" value={search} onChange={handleSearchChange} placeholder="Search for a team" />
        </div>
        <div className="team-container">
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              homeTeamLogo={team.logo}
              homeTeamScore={0} // Assuming you have score data or set it accordingly
              awayTeamLogo={''} // Assuming you have away team data or set it accordingly
              awayTeamScore={0} // Assuming you have score data or set it accordingly
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
