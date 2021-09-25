import { Box, Text, Button } from '@blockstack/ui';
import { authenticate,userSession } from '../auth';

function DamianTest(){
    let state = {
        userData: null,
      }
    let userdata =  userSession.loadUserData();

    return(
        <>
         {userSession.isUserSignedIn() ? "OMG Welcome user: "+userdata.identityAddress :  
        <Button onClick={() => authenticate()}>Authenticate</Button>}s
        </>
    )
}

export default DamianTest