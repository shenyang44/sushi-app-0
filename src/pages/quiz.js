import React from 'react';
import { useHistory } from 'react-router-dom';

const Quiz = (props) => {
    let selectedTeam = localStorage.getItem('selectedTeam')
    let history = useHistory()
    function handleClick(e) {
        if (e.target.getAttribute('data-team') === selectedTeam) {
            if (window.confirm('Good Job! Go again?')) {
                window.location.reload(true)
            }
            else {
                history.push('/')
            }
        }
        else {
            if (window.confirm(`Sorry but ${e.target.innerHTML} played for the ${e.target.getAttribute("data-team")}. \n Continue? `)) {
                return
            }
            else {
                history.push('/')
            }
        }
    }
    return (
        <>
            <h4 className='m-2'>
                The {selectedTeam}
            </h4>

            <div className='d-flex flex-wrap'>
                {props.players.map((data, index) => {
                    return (<div key={index} onClick={handleClick} data-team={data.team.name} className='nameBox m-3'>{data.first_name} {data.last_name}</div>)
                })}
            </div>
        </>
    )
}

export default Quiz;