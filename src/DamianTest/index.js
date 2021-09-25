import {useContext} from 'react';
import { Box, Text, Button } from '@blockstack/ui';
import { authenticate,userSession } from '../auth';
import { useHistory } from 'react-router-dom';
import {UserContext} from  "../App";


function DamianTest(){
    let history = useHistory()
    let state = {
        userData: null,
    }
    let {user,setUser} = useContext(UserContext);
    console.log(user);
    if  (userSession?.isUserSignedIn())
    {
        if (!user) {
            user  = {};
        }
        user.identityAddress = userSession?.loadUserData().identityAddress
        setUser(user);
    } 

    return(
        <>
         {userSession?.isUserSignedIn() ? "OMG Welcome user: "+userSession?.loadUserData().identityAddress :  
        <Button onClick={() => authenticate()}>Authenticate</Button>}
        </>
    )
}

export default DamianTest