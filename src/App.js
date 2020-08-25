import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, useHistory } from 'react-router-dom';
import Team from './pages/team';
import Landing from './pages/landing';
import About from './pages/about';
import Quiz from './pages/quiz';
import axios from 'axios';

function App() {
  const [players, setPlayers] = useState([])
  let history = useHistory()

  function playerCall() {
    axios.get('https://www.balldontlie.io/api/v1/players', {
      params: {
        page: ranNum(),
        per_page: 20
      }
    })
      .then(result => {
        setPlayers(result.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const teamSelect = (e) => {
    localStorage.setItem('selectedTeam', e.target.innerHTML)
    history.push('/quiz')
    playerCall()
  }

  useEffect(() => {
    if (players.find((x) => {
      return x.team.name === localStorage.getItem('selectedTeam')
    })) {
      return
    }
    else {
      playerCall()
    }
  }, [players])
  function ranNum() {
    let n = Math.floor((Math.random() * 164) + 1)
    return (n)
  }

  return (
    <main style={{ width: '100vw', boxSizing: 'border-box' }}>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route exact path='/team'>
        <Team teamSelect={teamSelect} />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/quiz'>
        <Quiz players={players} />
      </Route>
    </main>
  );
}

export default App;
