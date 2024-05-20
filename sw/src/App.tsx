// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import TeamCard from './components/TeamCard';

function App() {
  useEffect(() => {
    async function GetTeams(searchParams)
    {
      const options = {
        method: 'GET',
        url: 'https://api-basketball.p.rapidapi.com/teams',
        params: { search: searchParam },
        headers: {
        'X-RapidAPI-Key': '12f596280emshb01be7f03c24984p132837jsnf15342aa333e',
        'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        }
      }
    }

    try {
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };
  }

  function HandleSearch(Team)
  {
    GetTeams(value);
  }

  return (
    <>
      <div>
        <div className="header">
          <input type="text" value={search} onChange={HandleSearch} placeholder="Search for a team" />
        </div>
        <div className="team-container">
          
        </div>
      </div>
    </>
  );
}

export default App;
