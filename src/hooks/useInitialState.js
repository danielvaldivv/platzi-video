import { useState, useEffect} from 'react'


const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API) // If i want to use the Fake API, I need run json-server initialState.json
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return videos;
}

export default useInitialState;