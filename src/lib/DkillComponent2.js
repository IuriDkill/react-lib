import React from 'react';

const DkillComponent2 = (props) =>{
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 20, background: 'gray', borderRadius: 5}}>
                <h2>{props.nick}</h2>
                <p>Team: {props.team}</p>
                <p>Agent: {props.agent}</p>
                <p>Rank: {props.rank}</p>
            </div>
        </div>
    );
}

export default DkillComponent2;