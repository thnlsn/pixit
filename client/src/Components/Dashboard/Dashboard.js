import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/user/userContext';
import SimpleMap from './Map';

// dummy stats


const Dashboard = (props) => {  /* 
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [loadUser, setLoadUser] = useState(null)
    const [user, setUser] = useState(props.user) */
    const userContext = useContext(UserContext)
    const { isAuthenticated, loadUser, user } = userContext;
    const {lbs, pixPoints, starts, contributions, zip} = user;
    let coords = [];

    useEffect(() => {
        getCoordinates(zip)
        console.log(getCoordinates(zip))
        // eslint-disable-next-line
    }, []);


    function getCoordinates(zipcode){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyAObjwKwsn3gcQs7QxH8OGwqjK4erKJMCA&region=us`)
          .then(response => response.json())
          .then(data => {
            let latitude = data.results[0].geometry.location.lat
            let longitude = data.results[0].geometry.location.lng
            coords.push(latitude);
            coords.push(longitude);
          })
      }

    return (
        <div className="grid-container">
            <div className="item1">
                <SimpleMap lat={51.771830}
                           lng={19.461002}>

                </SimpleMap>
            </div>
            <div className="item2">
                <container className="stats-container">
                    <ul className='user-stats-list'>
                        <li>
                            Pounds of trash picked up : {lbs}
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
                </container>
            </div>
        </div>
    );
};

export default Dashboard;
