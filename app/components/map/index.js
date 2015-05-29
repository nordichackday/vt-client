/*global OpenLayers*/

import React from 'react';

export default class Map extends React.Component {
  constructor(props) {
    props = props || {};
    super(props);
  }

  componentDidMount() {
    const data = JSON.parse("{\"bounds\": [[63.2270032,-24.3055935], [66.5336615,-13.0336209]]}");

    // Set Mapbox access token
    L.mapbox.accessToken = 'pk.eyJ1IjoibnJrIiwiYSI6Ii14T3NfSzgifQ.0N5h3SI2b6bemxP_1YESIA';

    // Create a map in the "map" div, set the view to a given place and zoom
    var map = L.mapbox.map('map', 'mapbox.streets');

    // Update map bounds
    map.fitBounds(data.bounds);

    // Use a special map theme
    L.tileLayer('https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-4xtxp73f/{z}/{x}/{y}.png', {
      attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
    }).addTo(map);

    // Add a marker in the given location, attach some popup content to it and open the popup
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
      .openPopup();
  }

  render() {
    console.log('render map', this.props);

    return (
      <div className='map' id='map'></div>
    );
  }
}
