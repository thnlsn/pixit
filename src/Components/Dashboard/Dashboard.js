import React from 'react';


// dummy stats
const poundsPicked = 69;
const pixPoints = 420;
const starts = 1;
const contributions = 2;

const userStatsList = (
    <ul className='dashboard-stats-list w3-border'>
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
        <container className="userStat-container">
        {userStatsList}
        </container>
    );
};

export default Dashboard;