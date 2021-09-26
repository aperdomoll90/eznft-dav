import {useContext} from 'react';
import { Button } from '@blockstack/ui';
import { authenticate,userSession } from '../auth';
import {UserContext} from  "../App";

function DamianTest(){
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
        <div>
            <Button onClick={() => authenticate()}>Connect your Hiro  Wallet</Button>
            <p>If you don't know about the Hiro Wallet Go to: <a href="https://www.hiro.so/wallet">Hiro.so</a></p>
        </div>
        }
        </>
    )
}

export default DamianTest