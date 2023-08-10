import { useEffect, useState } from "react";
import { getEpisodes } from "../requests/api";

const Episodes = () => {
  let [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const requestEps = getEpisodes();
    requestEps.then(eps => setEpisodes(eps))
  }, [])

  return (
    <div>
      <div>{episodes.map(episodes => (
        <div key={episodes.id}>{episodes.name}</div>
      ))}
      </div>
    </div>
  )
}

export default Episodes;