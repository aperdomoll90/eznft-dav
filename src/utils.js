import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytes } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCTIFhs4zLPVDcuw5vesHaVImUv0jy4hTY",
  authDomain: "eznft-dav.firebaseapp.com",
  projectId: "eznft-dav",
  storageBucket: "eznft-dav.appspot.com",
  messagingSenderId: "178953838130",
  appId: "1:178953838130:web:d4ab1b4c289ae39d83662b"
}

export function uploadFile(file) {
  console.log(file)
  const firebaseApp = initializeApp(firebaseConfig)
  const storage = getStorage(firebaseApp)
  const fileName = file.name || 'image_' + Date.now().toString() + '.jpg'
  const storageRef = ref(storage, 'images/' + fileName)
  const publicUrl = `https://firebasestorage.googleapis.com/v0/b/eznft-dav.appspot.com/o/images%2F${fileName}?alt=media`
  return uploadBytes(storageRef, file).then(() => {
    return publicUrl
  })
}


