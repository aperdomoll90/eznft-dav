import {useContext} from 'react';
import { Button } from '@blockstack/ui';
import { authenticate,userSession } from '../auth';
import {UserContext} from  "../App";
import { StacksMainnet, StacksTestnet } from '@stacks/network';
//import { makeSTXTokenTransfer } from '@stacks/transactions';
import { makeContractCall, BufferCV, broadcastTransaction,getNonce } from '@stacks/transactions';
import { openContractCall } from '@stacks/connect';
//const BigNum = require('bn.js');
import {
    uintCV,
    intCV,
    bufferCV,
    stringAsciiCV,
    stringUtf8CV,
    standardPrincipalCV,
    trueCV,
  } from '@stacks/transactions';

function Mint() {
    const functionArgs = [
      ];
      
      const options = {
        contractAddress: 'ST3VMN4221GKGGFV2WJHW64RGJNKP1Y00KPGVBZC8',
        contractName: 'eznft-bocacode',
        functionName: 'claim',
        functionArgs,
        appDetails: {
          name: 'ez  NFT',
          icon: window.location.origin + '/my-app-logo.svg',
        },
        onFinish: data => {
            console.log("data",data)

        },
      };
      
       openContractCall(options).then(answer =>  {
           console.log("answer:",answer)
           //getTokenID();
       });
}

function getTokenID() {
    const functionArgs = [
        // uintCV(1234),
        // intCV(-234),
        // bufferCV(Buffer.from('hello, world')),
        // stringAsciiCV('hey-ascii'),
        // stringUtf8CV('hey-utf8'),
        // standardPrincipalCV('ST3VMN4221GKGGFV2WJHW64RGJNKP1Y00KPGVBZC8'),
        // trueCV(),
      ];
      
      const options = {
        contractAddress: 'ST3VMN4221GKGGFV2WJHW64RGJNKP1Y00KPGVBZC8',
        contractName: 'eznft-bocacode',
        functionName: 'get-last-token-id',
        functionArgs,
        appDetails: {
          name: 'ez  NFT',
          icon: window.location.origin + '/my-app-logo.svg',
        },
        onFinish: data => {
          console.log("Data:",data)
        //   console.log('Stacks Transaction:', data.stacksTransaction);
        //   console.log('Transaction ID:', data.txId);
        //   console.log('Raw transaction:', data.txRaw);
        },
      };
      
       openContractCall(options).then(answer =>  {
           console.log("answer:",answer)
       }); 
}


function BuyNFC(TransactionID) {
    const functionArgs = [
        uintCV(15),
        "",
        standardPrincipalCV('ST3VMN4221GKGGFV2WJHW64RGJNKP1Y00KPGVBZC8'),
        // intCV(-234),
        // bufferCV(Buffer.from('hello, world')),
        // stringAsciiCV('hey-ascii'),
        // stringUtf8CV('hey-utf8'),
        // standardPrincipalCV('ST3VMN4221GKGGFV2WJHW64RGJNKP1Y00KPGVBZC8'),
        // trueCV(),
      ];
      
      const options = {
        contractAddress: 'ST3VMN4221GKGGFV2WJHW64RGJNKP1Y00KPGVBZC8',
        contractName: 'eznft-bocacode',
        functionName: 'transfer',
        functionArgs,
        appDetails: {
          name: 'ez  NFT',
          icon: window.location.origin + '/my-app-logo.svg',
        },
        onFinish: data => {
          console.log('Stacks Transaction:', data.stacksTransaction);
          console.log('Transaction ID:', data.txId);
          console.log('Raw transaction:', data.txRaw);
        },
      };
      
       openContractCall(options).then(answer =>  {
           console.log("answer:",answer)
       });
}




function DamianTest(){
    let {user,setUser} = useContext(UserContext);
    //console.log(user);
    if  (userSession?.isUserSignedIn())
    {
        if (!user) {
            user  = {};
        }
        user.address = userSession?.loadUserData().profile.stxAddress.testnet
        user.privateKey =  userSession?.loadUserData().appPrivateKey
        setUser(user);
        console.log(userSession);
    } 

    return(
        <>
         {userSession?.isUserSignedIn() ? 
         <div>
             Welcome user address: {userSession.loadUserData().profile.stxAddress.testnet}
             <button onClick={() => Mint()}>Mint</button><br />
             <button onClick={() => BuyNFC("ca8eb328fcce30d4d7a9444812b48bc61ee1eb6ba7844e3b4cffcdc9fdfe4daa")}>Buy</button><br />
        </div>:  
        <div>
            <Button onClick={() => authenticate()}>Connect your Hiro  Wallet</Button>
            <p>If you don't know about the Hiro Wallet Go to: <a href="https://www.hiro.so/wallet">Hiro.so</a></p>
           
        </div>
        }
        </>
    )
}

export default DamianTest