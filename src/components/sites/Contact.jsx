import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function Contact(props) {
    return (
        <div id={props.id} style={{
            position: "relative",
            height: `calc(${window.innerHeight}px - 42px)`,
            alignContent: "center",
            justifyContent: "center",
            display: "flex"
        }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9758.542056613953!2d8.640625348033184!3d52.30446967638229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba092c4bb64763%3A0x9573dcc5ffa879af!2sPiano%20Service!5e0!3m2!1sde!2sde!4v1582889620804!5m2!1sde!2sde"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen="">
            </iframe>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDTAdF-rAb0EeaBFTR-rhCoFqjTDkWB0Yo'
})(Contact);
