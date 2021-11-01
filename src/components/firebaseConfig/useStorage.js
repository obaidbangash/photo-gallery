import React, { useEffect, useState } from 'react'
import { prjectStorage } from "../../firebase/config"
function useStorage(image) {
  const [url, setUrl] = useState(null)
  useEffect(() => {
    // references 
    const storageRef = prjectStorage.ref(image.name);
    storageRef.put(image).on('state_changed', (snap) => {

    }, async () => {
      const url = await storageRef.getDownloadURL();
      setUrl(url)
    })
  }, [image])
  return { url }
}

export default useStorage
