import { useState } from 'react'
import { uploadFile } from '../utils'
import { ContentBox } from '../styles'
import './style.css'

function AddArtwork() {
     const [newArt, setNewArt] = useState()
     const [photoUrl, setPhotoUrl] = useState()
     const handleUpload = file => {
          uploadFile(file).then(publicUrl => {
               setPhotoUrl(publicUrl)
          })
     }
     return (
          <ContentBox>
               <div class="table">
                    <div class="frstRow">
                         <section className="container">
                              <input
                                   type="file"
                                   accept="image/*"
                                   onChange={e => handleUpload(e.target.value)}
                              />
                         </section>
                    </div>
                    <div class="scndRow">
                         <div class="artNameField"></div>
                         <div class="artPriceField"></div>
                         <div class="artQntyField"></div>
                    </div>
                    <div class="thrdRow">
                         <div class="streetField">
                              <label>Street</label>
                              <input
                                   class="input"
                                   onChange={e =>
                                        setNewArt({
                                             ...newArt,
                                             street: e.target.value,
                                        })
                                   }
                              />
                         </div>
                         <div class="cityField">
                              <label>city</label>{' '}
                              <input
                                   class="input"
                                   onChange={e =>
                                        setNewArt({
                                             ...newArt,
                                             city: e.target.value,
                                        })
                                   }
                              />
                         </div>
                         <div class="zipField">
                              <label>state</label>
                              <input
                                   class="input"
                                   onChange={e =>
                                        setNewArt({
                                             ...newArt,
                                             state: e.target.value,
                                        })
                                   }
                              />
                         </div>
                         <div class="zipField">
                              <label>zip</label>
                              <input
                                   class="input"
                                   onChange={e =>
                                        setNewArt({
                                             ...newArt,
                                             zip: e.target.value,
                                        })
                                   }
                              />
                         </div>
                    </div>
                    <div class="fthRow">
                         <div class="descriptionField">
                              <label>Comment here</label>
                              <textarea
                                   onChange={e =>
                                        setNewArt({
                                             ...newArt,
                                             description: e.target.value,
                                        })
                                   }
                                   class="descriptionTextarea"
                                   rows="9"
                                   cols="30"
                              />
                         </div>
                         <div class="signatureField"></div>
                    </div>
                    <div class="FftRow">
                         <div class="button"></div>
                         <div class="button"></div>
                    </div>
               </div>
          </ContentBox>
     )
}

export default AddArtwork
