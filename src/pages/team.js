import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Team = ({ teamSelect }) => {
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get("https://www.balldontlie.io/api/v1/teams")
            .then(result => {
                setCharacters(result.data.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        isLoading ? (<div className='loader'>Loading GIF here</div>) :
            (<>
                <div className='container p-3'>
                    <div className='row'>
                        <div className='col-12'>Click on an NBA team to enter a quiz.<br></br> Can you identify a player from your selected team?</div>
                        <br></br>
                        {characters.map((data, index) => {
                            return (<><div key={data.id} onClick={teamSelect} className='team-name col-md-2 col-sm-5'>{data.name}</div><div className='col-1'></div></>)
                        })}
                    </div>
                    <br></br>
                    <div className='row m-3'>
                        <Link to='/'>
                            Home
                        </Link>
                    </div>
                </div>
            </>)
    )
}

export default Team;