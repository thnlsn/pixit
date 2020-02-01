import React from 'react';


// dummy stats
const poundsPicked = 69;
const pixPoints = 420;
const starts = 1;
const contributions = 2;

const userStatsList = (
    <ul className='w3-ul'>
    <li>
        Pounds of trash picked up : {poundsPicked}
    </li>
    <li>
        Pix Points: {pixPoints}
    </li>
    <li>
        Starts: {starts}
    </li>
    <li>
        Contributions: {contributions}
    </li>

</ul>
)

const Dashboard = () => {
    return (
        <div className="grid-container">
            <div className="item1">
                
            </div>
            <div className="item2">
                <container className="stats-container">
                {userStatsList}
                </container>
            </div>
        </div>
    );
};

export default Dashboard;