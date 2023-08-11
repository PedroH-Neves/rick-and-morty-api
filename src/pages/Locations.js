import { useEffect, useState } from "react";
import { getLocations } from "../requests/api";

const Locations = () => {
  let [locations, setLocations] = useState([]);

  useEffect(() => {
    const requestLocs = getLocations();
    requestLocs.then(locs => setLocations(locs))
  }, [])

  return (
    <div>
      <div>{locations.map(locations => (
        <div key={locations.id}>{locations.name}</div>
      ))}
      </div>
    </div>
  )
};

export default Locations;