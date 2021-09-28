import { openContractCall } from '@stacks/connect';
import { Button } from '@blockstack/ui';
import { authenticate,userSession } from '../auth';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import Button from '@mui/material/Button'
import { uploadFile } from '../utils'
import { ContentBox } from '../styles'
import './style.css'

function AddArtwork() {
     let history = useHistory()
     const [newArt, setNewArt] = useState()
     const handleUpload = files => {
          console.log(files)
          uploadFile(files[0]).then(photoUrl => {
               setNewArt({ ...newArt, image_url: photoUrl })
          })
     }

  const handleSubmit = () => {

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
              console.log("data",data);
              fetch(`https://eznft-api.web.app/artwork`, {
                // fetch(`http://localhost:5000/artwork`, {
                  method: 'POST',
                  headers: {'Content-Type': 'application/json'},
                  mode: 'no-cors',
                  body: JSON.stringify(newArt),
                })
                  .then(() => history.push('/'))
                  .catch(err => console.log(err))
          },
        };
        
         openContractCall(options).then(answer =>  {
             console.log("answer:",answer)
         });
  }

     return (
          <ContentBox>
               <div className="table">
                    <section className="column">
                         <div className="pictureRow">
                              <input
                                   type="file"
                                   accept="image/*"
                                   onChange={e => handleUpload(e.target.files)}
                              />
                         </div>
                    </section>
                    <section className="column">
                         <div className="infoField">
                              <div className="tripleRow">
                                   <input
                                        className="mediumInput"
                                        placeholder="  Name of the Piece"
                                        onChange={e =>
                                             setNewArt({
                                                  ...newArt,
                                                  art_name: e.target.value,
                                             })
                                        }
                                   />
                                   <input
                                        className="smallInput"
                                        placeholder="  Price"
                                        onChange={e =>
                                             setNewArt({
                                                  ...newArt,
                                                  price: e.target.value,
                                             })
                                        }
                                   />
                                   <input
                                        className="smallInput"
                                        placeholder="  Quantity"
                                        onChange={e =>
                                             setNewArt({
                                                  ...newArt,
                                                  quantity: e.target.value,
                                             })
                                        }
                                   />
                              </div>
                              <div className="singleRow">
                                   <input
                                        className="largeInput"
                                        placeholder="  Street Address"
                                        onChange={e =>
                                             setNewArt({
                                                  ...newArt,
                                                  location: e.target.value,
                                             })
                                        }
                                   />
                              </div>
                         </div>
                         <div className="infoField">
                              <label>
                                   Provide a description of the piece here:{' '}
                              </label>
                              <textarea
                                   rows="30"
                                   cols="80"
                                   onChange={e =>
                                        setNewArt({
                                             ...newArt,
                                             description: e.target.value,
                                        })
                                   }
                                   className="descriptionTextarea"
                              />
                         </div>

          <div className='buttonField'>
          

          {userSession?.isUserSignedIn() ? <Button variant="contained"
            size="large"
            color="warning"
            className={"MuiButton-root MuiButton-contained MuiButton-containedWarning MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButtonBase-root css-zm37py-MuiButtonBase-root-MuiButton-root"}
           onClick={() =>  handleSubmit}>
            Create NFT</Button>
            :  
            <Button onClick={() => authenticate()}>
              Connect your Hiro  Wallet
            </Button>
        }



          </div>
        </section>
      </div>
    </ContentBox>
  )
}

export default AddArtwork
