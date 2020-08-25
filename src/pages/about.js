import React from 'react';
import { Link } from 'react-router-dom';

const Notify = () => {
    return (
        <div className='p-4'>
            <h3>
                About The Game.
        </h3>
            <br></br>
            <p>
                An NBA quiz game, where you have to select the player who currently plays/played(for the most substantial amount of time) for the selected team.
        </p>
            <p>
                Each array of 20 names is generated from a random page of all players listed on the https://www.balldontlie.io/api/v1/players API.
        </p>
            <p>
                At LEAST 1 name of those presented will be a player of the said team. Only 1 needs to be chosen to 'win' the game. After choosing incorrectly, you still have the option to continue.
        </p>
            <br></br>
            <Link to='/'>
                Back Please.
        </Link>
        </div>

    )
}

export default Notify;