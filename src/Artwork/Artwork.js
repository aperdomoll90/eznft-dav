import { standardPrincipalCV } from '@stacks/transactions';
import { openContractCall } from '@stacks/connect';
import { Button } from '@blockstack/ui';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArtCard from "../Components/ArtCard";
import { ContentBox } from "../styles";
import { uintCV } from '@stacks/transactions';
import { userSession } from '../auth';

function BuyNFC(ArtID,NFTID) {
  if  (!userSession?.isUserSignedIn()) {
     alert("Please install the Hiro.so Wallet");
    //  return;
  }
  try  {
  console.log("Buy")
  const functionArgs = [
      uintCV(15),
      "",
      standardPrincipalCV('ST3VMN4221GKGGFV2WJHW64RGJNKP1Y00KPGVBZC8')
    ];
    
    const options = {
      contractAddress: 'ST3VMN4221GKGGFV2WJHW64RGJNKP1Y00KPGVBZC8',
      contractName: 'eznft-bocacode',
      functionName: 'transfer',
      functionArgs,
      appDetails: {
        name: 'ez  NFT',
        icon: window.location.origin + '/eznft-logo.png',
      },
      onFinish: data => {
        console.log('Stacks Transaction:', data.stacksTransaction);
        console.log('Transaction ID:', data.txId);
        console.log('Raw transaction:', data.txRaw);
        fetch(`https://eznft-api.web.app/buy`, {
          // fetch(`http://localhost:5000/artwork`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            mode: 'no-cors',
            body: JSON.stringify({artId:ArtID,userId:"Damian",nfcId:NFTID}),
          })
            .then(() => alert("Congratulations! You're the owner!"))
            .catch(err => console.log(err))
      },
    };
    //  openContractCall(options).then(answer =>  {
    //      console.log("answer:",answer)
    //  });
    } catch (ex) {
      alert("Please install Hiro.so wallet!")
    }
}

function Artwork() {
  const { id } = useParams();
  const [artWorkById, setArtWorkById] = useState();

  useEffect(() => {
    fetch(`https://eznft-api.web.app/artwork/${id}`)
      .then((res) => res.json())
      .then((data) => setArtWorkById(data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(artWorkById);
  return (
    <ContentBox>
      <div>
        {artWorkById ? <ArtCard info={artWorkById} /> : <h2>Loading...</h2>}
      </div>
      <div>
      <Button variant="contained"
            size="large"
            color="warning"
            className={"MuiButton-root MuiButton-contained MuiButton-containedWarning MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButtonBase-root css-zm37py-MuiButtonBase-root-MuiButton-root"}
           onClick={BuyNFC(artWorkById,15)}>
            Buy NFT</Button>
      </div>
    </ContentBox>
  );
}

export default Artwork;
