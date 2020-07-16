import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import React from "react";

const mapStyles = {
  width: "400px",
  height: "400px",
  borderRadius: "10px"
};

function GMap(props) {
  const { lat = 35.0, lng = -79.0 } = props;
  return (
    <div className="flex-1">
      {/* //{" "}
      <div>
        // <a href="https://goo.gl/maps/D5NhTs2yFWsG4vhK6">Directions</a>
        //{" "}
      </div> */}
      <Map
        className="rounded-lg"
        google={props.google}
        zoom={18}
        style={mapStyles}
        initialCenter={{ lat, lng }}
      >
        <Marker
          title={"The marker`s title will appear as a tooltip."}
          name={"Your Business"}
          position={{ lat, lng }}
          icon={{
            url: "./pbxtag.png",
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(20, 20)
          }}
        />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBiSk90rSD4KcUQWpyqKXvq1ZH38CkIHqc"
})(GMap);
