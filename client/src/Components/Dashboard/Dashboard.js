import React, { useContext, useEffect} from 'react';
import UserContext from '../../context/user/userContext';

// dummy stats

const Dashboard = (props) => {  
    var results = []
    const userContext = useContext(UserContext);
    const { isAuthenticated, loadUser, user } = userContext;
    const {lbs, pixPoints, starts, contributions, zip} = user;

    useEffect(() => {
        if (!isAuthenticated) {
            props.history.push('/');
        } else {
            getCoordinates(zip)
        }
        // eslint-disable-next-line
    }, [isAuthenticated, zip, props.history]);

    function getCoordinates(zipcode){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyAObjwKwsn3gcQs7QxH8OGwqjK4erKJMCA&region=us`)
          .then(response => response.json())
          .then(data => {
            let latitude = data.results[0].geometry.location.lat
            let longitude = data.results[0].geometry.location.lng
            results.push(latitude, longitude);
            console.log(results)
          })
      }
    return (
        <div className="grid-container">
            <div className="item1">
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
