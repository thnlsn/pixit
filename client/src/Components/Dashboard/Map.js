import React, { Component, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap(props) {
console.log(props)
let zip;
  const [lat, setLat] = useState(props.lat);
  const [lng, setLng] = useState(props.lng);

  const [center, setCenter] = useState({
    lat: props.lat,
    long: props.lng
  })

  useEffect(() => {
    setLat(lat);
    setLng(lng);
  }, [lat,lng])

  console.log(center)

  useEffect(() => {
    setCenter(center)
    // eslint-disable-next-line
}, [center, zip]);

console.log(center)

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAObjwKwsn3gcQs7QxH8OGwqjK4erKJMCA' }}
        defaultCenter={center}
        defaultZoom={16}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
  

 
export default SimpleMap;
