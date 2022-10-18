import React from 'react'
import './maps.scss'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  const center = {
    lat: -3.745,
    lng: -38.523
  };

export default function Maps() {

    
  return (
    <div className='maps'>

        <h2>Onde fica nosso castelo</h2>
        <h3>Estaremos de portas abertas para a nossa realeza.</h3>

        <div className="container">
        <LoadScript
                      googleMapsApiKey="AIzaSyAT62NzSfccBJZg1brAX-McZY6oUcAJvmw"
                    >
              <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={15}
              >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
              </GoogleMap>
        </LoadScript>
        </div>

    </div>
  )
}
