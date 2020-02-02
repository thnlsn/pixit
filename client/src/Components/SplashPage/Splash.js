import React, {useContext, useEffect} from 'react';
import UserContext from '../../context/user/userContext';
import AlertContext from '../../context/alert/alertContext';

const Splash = (props) => {

    const userContext = useContext(UserContext)
    const { isAuthenticated, user } = userContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/dashboard');
        } 
        // eslint-disable-next-line
    }, [isAuthenticated, props.history]);


    return (
        <div className='splash'>
            <p>
                Cleaning up your community one PIX at a time.
            </p>

        </div>
    );
};

export default Splash;