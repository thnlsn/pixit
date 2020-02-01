import React, { useContext } from 'react';
import UserContext from '../../context/user/userContext';

// dummy stats
const poundsPicked = 69;
const pixPoints = 420;
const starts = 1;
const contributions = 2;

const userStatsList = (
    <ul className='user-stats-list'>
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
    const userContext = useContext(UserContext);
    /*     const { isAuthenticated } = userContext; */

    return (
        <div className="grid-container">
            <div className="item1">
                MAP GOES HERE DUDES
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
